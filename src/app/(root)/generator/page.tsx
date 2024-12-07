import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {
    Carousel,
    CarouselMainContainer,
    SliderMainItem,
    CarouselThumbsContainer,
    SliderThumbItem,
} from "@/components/ui/carousel";
import {AutosizeTextarea} from "@/components/custom/AutosizeTextarea";

export default function Generator() {
    return (
        <div>
            <div
                className="h-[80vh] md:h-screen"
                style={{
                    background:
                        "radial-gradient(155.35% 155.35% at 50% -17.73%, #000 0%, #191919 43.63%, #343434 68.62%, #666 100%)",
                }}
            >
                <div
                    className="h-full max-w-6xl mx-auto relative flex items-start justify-center flex-col gap-12">
                    <div className="w-full grid gap-4 md:pe-32 xl:pe-[32rem]">
                        <h1 className="min-[320px]:text-4xl sm:text-5xl md:text-6xl xl:text-[5.3125rem] font-black leading-tight">
                            Ai Generator
                        </h1>
                        <p className="text-xl xl:text-3xl font-semibold">
                            Bring You Ideas to Life
                        </p>
                        <span className="text-base xl:text-xl">
                            Turn your ideas into amazing visuals quickly with our AI image generator! Watch your imagination come to life as you create stunning art from text and images.
                        </span>
                    </div>
                </div>
                <div className="-mt-24 md:-mt-40 w-full grid place-content-center">
                    <div className="w-80 md:w-[40rem] lg:w-[50rem] xl:w-[70rem] space-y-6 z-50">
                        <div className="relative w-full mx-auto">
                            <div className="relative group h-[30vh] ">
                                <div
                                    className="absolute left-4 top-4 text-zinc-400 group-focus-within:text-white transition-colors">
                                    <svg width="34" height="34" viewBox="0 0 34 34" className="size-5" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.75 4.25V29.75M7.08333 4.25H26.9167C28.4815 4.25 29.75 5.51853 29.75 7.08333V26.9167C29.75 28.4815 28.4815 29.75 26.9167 29.75H7.08333C5.51853 29.75 4.25 28.4815 4.25 26.9167V7.08333C4.25 5.51853 5.51853 4.25 7.08333 4.25Z"
                                            stroke="white" strokeWidth="2.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <AutosizeTextarea
                                    placeholder="Describe what you want to create"
                                    className="resize-none max-h-96 pl-12 pr-4 py-4 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-400 focus:border-white/20 focus:ring-0 rounded-lg transition-colors"
                                />
                            </div>
                        </div>
                        <Button className="gap-4">Generate
                            <svg width="24" height="25" viewBox="0 0 24 25" className="size-4" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.0099 9.49L15.0099 6.49M3.49994 21C4.32994 21.83 5.66994 21.83 6.49994 21L19.4999 8C20.3299 7.17 20.3299 5.83 19.4999 5C18.6699 4.17 17.3299 4.17 16.4999 5L3.49994 18C2.66994 18.83 2.66994 20.17 3.49994 21ZM8.49994 2.94L9.99994 2.5L9.55994 4L9.99994 5.5L8.49994 5.06L6.99994 5.5L7.43994 4L6.99994 2.5L8.49994 2.94ZM4.49994 8.94L5.99994 8.5L5.55994 10L5.99994 11.5L4.49994 11.06L2.99994 11.5L3.43994 10L2.99994 8.5L4.49994 8.94ZM19.4999 13.94L20.9999 13.5L20.5599 15L20.9999 16.5L19.4999 16.06L17.9999 16.5L18.4399 15L17.9999 13.5L19.4999 13.94Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className="w-full h-44"
                style={{
                    background: "linear-gradient(180deg, #565656 -48.47%, #000 87.79%)",
                }}
            ></div>

            <div className="max-w-[70rem] mt-24 container space-y-6">
                <span className="text-2xl font-sans font-bold">Sample Images</span>
                <Carousel>
                    {/* <CarouselNext className="top-1/3 -translate-y-1/3" />
                    <CarouselPrevious className="top-1/3 -translate-y-1/3" /> */}
                    <CarouselMainContainer className="h-[50vh]">
                        {Array.from({length: 4}).map((_, index) => (
                            <SliderMainItem key={index} className="bg-transparent">
                                <div
                                    className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                                    Slide {index + 1}
                                </div>
                            </SliderMainItem>
                        ))}
                    </CarouselMainContainer>
                    <CarouselThumbsContainer>
                        {Array.from({length: 4}).map((_, index) => (
                            <SliderThumbItem key={index} index={index} className="bg-transparent">
                                <div
                                    className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                                    Slide {index + 1}
                                </div>
                                {" "}
                            </SliderThumbItem>
                        ))}
                    </CarouselThumbsContainer>
                </Carousel>
            </div>

            <div className="max-w-6xl container py-12 grid place-content-center text-center gap-6">
                <span className="text-xl md:text-3xl font-bold">
                    Explore more of our services
                </span>
                <div className="grid md:grid-cols-3 gap-6 items-center">
                    {[
                        {
                            svg: (
                                <svg
                                    width="33"
                                    height="32"
                                    viewBox="0 0 33 32"
                                    className="size-6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.69957 2.56006L3.17957 2.82006L3.07957 3.38006L3.47957 3.80006L3.69957 3.84006H4.97957L5.49957 3.58006L5.59957 3.02006L5.19957 2.60006L4.97957 2.56006H3.69957ZM7.53957 2.56006L7.01957 2.82006L6.91957 3.38006L7.31957 3.80006L7.53957 3.84006H8.81957L9.33957 3.58006L9.43957 3.02006L9.03957 2.60006L8.81957 2.56006H7.53957ZM11.3796 2.56006L10.8596 2.82006L10.7596 3.38006L11.1596 3.80006L11.3796 3.84006H12.6596L13.1796 3.58006L13.2796 3.02006L12.8796 2.60006L12.6596 2.56006H11.3796ZM15.2196 2.56006L14.6996 2.82006L14.5996 3.38006L14.9996 3.80006L15.2196 3.84006H16.4996L17.0196 3.58006L17.1196 3.02006L16.7196 2.60006L16.4996 2.56006H15.2196ZM19.0596 2.56006L18.5396 2.82006L18.4396 3.38006L18.8396 3.80006L19.0596 3.84006H20.3396L20.8596 3.58006L20.9596 3.02006L20.5596 2.60006L20.3396 2.56006H19.0596ZM22.8996 2.56006L22.3796 2.82006L22.2796 3.38006L22.6796 3.80006L22.8996 3.84006H24.1796L24.6996 3.58006L24.7996 3.02006L24.3996 2.60006L24.1796 2.56006H22.8996ZM26.7396 2.56006L26.2196 2.82006L26.1196 3.38006L26.5196 3.80006L26.7396 3.84006H28.0196L28.5396 3.58006L28.6396 3.02006L28.2396 2.60006L28.0196 2.56006H26.7396ZM29.1196 3.86006L28.6996 4.26006L28.6596 4.48006V5.76006L28.9196 6.28006L29.4796 6.38006L29.8996 5.98006L29.9396 5.76006V4.48006L29.6796 3.96006L29.1196 3.86006ZM3.51957 5.14006L3.09957 5.54006L3.05957 5.76006V7.04006L3.31957 7.56006L3.87957 7.66006L4.29957 7.26006L4.33957 7.04006V5.76006L4.07957 5.24006L3.51957 5.14006ZM18.2996 6.40006C18.0021 6.42756 17.7621 6.65756 17.7246 6.95506C17.6846 7.25256 17.8571 7.53756 18.1396 7.64006C18.1596 7.64756 18.1796 7.65506 18.1996 7.66006C18.2721 7.68006 18.3446 7.68506 18.4196 7.68006H23.9196L17.6396 13.9401L16.2196 15.3601H3.05957V29.4401H17.1396V16.2801L24.8196 8.58006V14.0801C24.8146 14.2776 24.9021 14.4651 25.0546 14.5901C25.2046 14.7151 25.4071 14.7626 25.5996 14.7201C25.6646 14.7026 25.7246 14.6751 25.7796 14.6401C25.7921 14.6351 25.8071 14.6276 25.8196 14.6201C25.8571 14.5901 25.8896 14.5576 25.9196 14.5201C26.0346 14.4026 26.0971 14.2451 26.0996 14.0801V6.40006H18.4196C18.3996 6.40006 18.3796 6.40006 18.3596 6.40006C18.3396 6.40006 18.3196 6.40006 18.2996 6.40006ZM29.1196 7.70006L28.6996 8.10006L28.6596 8.32006V9.60006L28.9196 10.1201L29.4796 10.2201L29.8996 9.82006L29.9396 9.60006V8.32006L29.6796 7.80006L29.1196 7.70006ZM3.51957 8.98006L3.09957 9.38006L3.05957 9.60006V10.8801L3.31957 11.4001L3.87957 11.5001L4.29957 11.1001L4.33957 10.8801V9.60006L4.07957 9.08006L3.51957 8.98006ZM29.1196 11.5401L28.6996 11.9401L28.6596 12.1601V13.4401L28.9196 13.9601L29.4796 14.0601L29.8996 13.6601L29.9396 13.4401V12.1601L29.6796 11.6401L29.1196 11.5401ZM3.51957 12.8201L3.09957 13.2201L3.05957 13.4401V14.7201L3.31957 15.2401L3.87957 15.3401L4.29957 14.9401L4.33957 14.7201V13.4401L4.07957 12.9201L3.51957 12.8201ZM29.1196 15.3801L28.6996 15.7801L28.6596 16.0001V17.2801L28.9196 17.8001L29.4796 17.9001L29.8996 17.5001L29.9396 17.2801V16.0001L29.6796 15.4801L29.1196 15.3801ZM29.1196 19.2201L28.6996 19.6201L28.6596 19.8401V21.1201L28.9196 21.6401L29.4796 21.7401L29.8996 21.3401L29.9396 21.1201V19.8401L29.6796 19.3201L29.1196 19.2201ZM29.1196 23.0601L28.6996 23.4601L28.6596 23.6801V24.9601L28.9196 25.4801L29.4796 25.5801L29.8996 25.1801L29.9396 24.9601V23.6801L29.6796 23.1601L29.1196 23.0601ZM29.1196 26.9001L28.6996 27.3001L28.6596 27.5201V28.8001L28.9196 29.3201L29.4796 29.4201L29.8996 29.0201L29.9396 28.8001V27.5201L29.6796 27.0001L29.1196 26.9001ZM17.7796 28.1601L17.2596 28.4201L17.1596 28.9801L17.5596 29.4001L17.7796 29.4401H19.0596L19.5796 29.1801L19.6796 28.6201L19.2796 28.2001L19.0596 28.1601H17.7796ZM21.6196 28.1601L21.0996 28.4201L20.9996 28.9801L21.3996 29.4001L21.6196 29.4401H22.8996L23.4196 29.1801L23.5196 28.6201L23.1196 28.2001L22.8996 28.1601H21.6196ZM25.4596 28.1601L24.9396 28.4201L24.8396 28.9801L25.2396 29.4001L25.4596 29.4401H26.7396L27.2596 29.1801L27.3596 28.6201L26.9596 28.2001L26.7396 28.1601H25.4596Z"
                                        fill="black"
                                    />
                                </svg>
                            ),
                            text: "Image Resizer",
                        },
                        {
                            svg: (
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    className="size-6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.55957 8.16006C2.55957 5.06758 5.06709 2.56006 8.15957 2.56006H23.8396C26.932 2.56006 29.4396 5.06758 29.4396 8.16006V23.8401C29.4396 26.9325 26.932 29.4401 23.8396 29.4401H8.15957C5.06709 29.4401 2.55957 26.9325 2.55957 23.8401V8.16006ZM21.7596 9.60006H17.2796C16.9256 9.60006 16.6396 9.88614 16.6396 10.2401C16.6396 10.594 16.9256 10.8801 17.2796 10.8801H20.2146L17.0146 14.0801H11.5196C10.461 14.0801 9.59957 14.9415 9.59957 16.0001V20.4801C9.59957 21.5386 10.461 22.4001 11.5196 22.4001H15.9996C17.0581 22.4001 17.9196 21.5386 17.9196 20.4801V14.985L21.1196 11.785V14.7201C21.1196 15.074 21.4056 15.3601 21.7596 15.3601C22.1135 15.3601 22.3996 15.074 22.3996 14.7201V10.2401C22.3996 9.88614 22.1135 9.60006 21.7596 9.60006Z"
                                        fill="black"
                                    />
                                </svg>
                            ),
                            text: "Image Upscaler",
                        },
                        {
                            svg: (
                                <svg
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    className="size-6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.5104 8.99L15.5104 5.99M4.00043 20.5C4.83043 21.33 6.17043 21.33 7.00043 20.5L20.0004 7.5C20.8304 6.67 20.8304 5.33 20.0004 4.5C19.1704 3.67 17.8304 3.67 17.0004 4.5L4.00043 17.5C3.17043 18.33 3.17043 19.67 4.00043 20.5ZM9.00043 2.44L10.5004 2L10.0604 3.5L10.5004 5L9.00043 4.56L7.50043 5L7.94043 3.5L7.50043 2L9.00043 2.44ZM5.00043 8.44L6.50043 8L6.06043 9.5L6.50043 11L5.00043 10.56L3.50043 11L3.94043 9.5L3.50043 8L5.00043 8.44ZM20.0004 13.44L21.5004 13L21.0604 14.5L21.5004 16L20.0004 15.56L18.5004 16L18.9404 14.5L18.5004 13L20.0004 13.44Z"
                                        stroke="#292D32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ),
                            text: "AI Image Generator",
                        },
                    ].map((item, index) => (
                        <Button
                            key={index}
                            className="w-full bg-white hover:bg-white/90 text-sm xl:text-lg p-6 gap-3"
                        >
                            {item.svg}
                            {item.text}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}