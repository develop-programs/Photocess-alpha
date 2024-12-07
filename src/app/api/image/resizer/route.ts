import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import sharp from 'sharp';

export async function POST(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const width = parseInt(searchParams.get('width') || '800', 10);
    const height = parseInt(searchParams.get('height') || '600', 10);
    const formData = await request.formData();
    const imageFile = formData.get('image') as File;
    const imageUrl = formData.get('imageUrl') as string;

    let buffer: Buffer;

    if (imageFile) {
        buffer = Buffer.from(await imageFile.arrayBuffer());
    } else if (imageUrl) {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        buffer = Buffer.from(response.data);
    } else {
        return NextResponse.json({ error: 'No image file or URL provided.' }, { status: 400 });
    }

    try {
        const resizedImage = await sharp(buffer)
            .resize(width, height)
            .toBuffer();

        return new NextResponse(resizedImage, {
            headers: {
                'Content-Type': 'image/png',
                'Content-Disposition': 'attachment; filename="resized.png"',
            },
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}