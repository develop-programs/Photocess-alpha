import {NextRequest, NextResponse} from 'next/server';
import axios from 'axios';
import Upscaler from 'upscaler';

export async function POST(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const imageUrlFromQuery = searchParams.get('imageUrl');
    const formData = await request.formData();
    const imageFile = formData.get('image') as File;
    const imageUrlFromBody = formData.get('imageUrl') as string;

    let buffer: ArrayBuffer;

    if (imageFile) {
        buffer = await imageFile.arrayBuffer();
    } else if (imageUrlFromQuery || imageUrlFromBody) {
        const imageUrl = imageUrlFromQuery || imageUrlFromBody;
        const response = await axios.get(imageUrl, {responseType: 'arraybuffer'});
        buffer = response.data;
    } else {
        return NextResponse.json({error: 'No image file or URL provided.'}, {status: 400});
    }

    try {
        const blob = new Blob([buffer], {type: 'image/jpeg'});
        const upscaler = new Upscaler();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const upscaledImage = await upscaler.upscale(blob);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const upscaledBuffer = Buffer.from(await upscaledImage.arrayBuffer());
        return new NextResponse(upscaledBuffer, {
            headers: {
                'Content-Type': 'image/png',
                'Content-Disposition': 'attachment; filename="upscaled.png"',
            },
        });
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}