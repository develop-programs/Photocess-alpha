import { Compare } from "@/components/acernity/Compare";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
    return (
        <div>
            <div
                className="h-[80vh] md:h-screen"
                style={{
                    background:
                        "radial-gradient(155.35% 155.35% at 50% -17.73%, #000 0%, #191919 43.63%, #343434 68.62%, #666 100%)",
                }}
            >
                <div className="h-full max-w-[90rem] container relative flex items-start justify-center flex-col gap-12">
                    <div className="w-full grid gap-4 md:pe-32 xl:pe-[32rem]">
                        <h1 className="min-[320px]:text-4xl sm:text-5xl md:text-6xl xl:text-[5.3125rem] font-black leading-tight">
                            Background
                            <br /> Remover
                        </h1>
                        <p className="text-xl xl:text-3xl font-semibold">
                            Remove background of any image effortlessly
                        </p>
                        <span className="text-base xl:text-xl">
                            Easily remove backgrounds from your photos! Simplify your images
                            and create beautiful visuals with just a few clicks.
                        </span>
                    </div>
                </div>
                <div className="-mt-24 md:-mt-40 w-full grid place-content-center">
                    <div className="bg-[#161616] w-80 md:w-[40rem] lg:w-[50rem] xl:w-[70rem] flex items-center justify-center flex-col gap-6 rounded-xl border border-slate-300 py-8 sm:py-12 xl:py-16">
                        <svg
                            width="73"
                            height="72"
                            className="size-12 lg:size-24"
                            viewBox="0 0 73 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="currentColor"
                        >
                            <path
                                d="M12.5 61.1482C13.7141 62.3339 15.3608 63 17.0778 63H55.9222C57.6392 63 59.2859 62.3339 60.5 61.1482M36.5036 9V44.8274M36.5036 44.8274L51.3014 31.1379M36.5036 44.8274L21.7058 31.1379"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="text-sm lg:text-xl">
                            Drag &apos;n&apos; drop files here, or click to selet files
                        </span>
                        <span className="text-sm lg:text-xl">JPG,PNG,JPEG,WEBP</span>
                    </div>
                </div>
            </div>
            <div
                className="w-full h-44"
                style={{
                    background: "linear-gradient(180deg, #565656 -48.47%, #000 87.79%)",
                }}
            ></div>
            <div className="py-12 mt-24 max-w-6xl container grid md:grid-cols-3 gap-3">
                {[
                    {
                        svg: (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="44"
                                viewBox="0 0 44 44"
                                fill="none"
                            >
                                <path
                                    d="M9.28881 25.6318L23.278 3.64879C23.5465 3.22677 24.1998 3.417 24.1998 3.91722V19.7002C24.1998 19.7554 24.2446 19.8002 24.2998 19.8002H34.2395C34.644 19.8002 34.8811 20.2555 34.6491 20.5869L20.7094 40.5007C20.4291 40.9012 19.7998 40.7029 19.7998 40.214V26.5002C19.7998 26.445 19.755 26.4002 19.6998 26.4002H9.71064C9.3161 26.4002 9.07699 25.9646 9.28881 25.6318Z"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </svg>
                        ),
                        title: "Lighting Fast",
                        description: "Remove background in seconds, not minutes",
                    },
                    {
                        svg: (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="44"
                                viewBox="0 0 44 44"
                                fill="none"
                            >
                                <path
                                    d="M15.9275 23.5167L15.281 22.7537L15.281 22.7537L15.9275 23.5167ZM16.0182 23.4298L15.3058 22.7281L15.305 22.7289L16.0182 23.4298ZM12.1997 26.6753L11.5532 25.9123L11.5532 25.9123L12.1997 26.6753ZM11.9955 26.8903L12.8163 27.4615L12.8163 27.4615L11.9955 26.8903ZM31.784 23.6487L31.0915 24.3701L31.0915 24.3701L31.784 23.6487ZM28.6024 20.5943L27.9099 21.3157L27.9099 21.3157L28.6024 20.5943ZM27.4209 20.586L26.7386 19.855L26.7361 19.8573L27.4209 20.586ZM21.5278 26.1247L22.2101 26.8558L22.2127 26.8534L21.5278 26.1247ZM20.3281 26.0985L19.6122 26.7966L19.6136 26.7981L20.3281 26.0985ZM20.3126 26.0826L19.596 26.7801L19.5967 26.7808L20.3126 26.0826ZM20.2284 26.0009L20.8832 25.245L20.8831 25.245L20.2284 26.0009ZM17.3576 23.5142L18.0123 22.7584L18.0123 22.7584L17.3576 23.5142ZM17.273 23.4321L17.9899 22.7349L17.9892 22.7342L17.273 23.4321ZM17.2579 23.4166L17.9741 22.7187L17.9727 22.7173L17.2579 23.4166ZM16.0345 23.4132L15.3235 22.7101L15.3221 22.7115L16.0345 23.4132ZM29.4242 12.7184V11.7184C28.8719 11.7184 28.4242 12.1661 28.4242 12.7184H29.4242ZM30.014 12.7184H31.014C31.014 12.1661 30.5663 11.7184 30.014 11.7184V12.7184ZM30.014 13.2179V14.2179C30.5663 14.2179 31.014 13.7702 31.014 13.2179H30.014ZM29.4242 13.2179H28.4242C28.4242 13.7702 28.8719 14.2179 29.4242 14.2179V13.2179ZM4.5 11.6875V32.3125H6.5V11.6875H4.5ZM11.6875 39.5H32.3125V37.5H11.6875V39.5ZM39.5 32.3125V11.6875H37.5V32.3125H39.5ZM32.3125 4.5H11.6875V6.5H32.3125V4.5ZM39.5 11.6875C39.5 7.71795 36.282 4.5 32.3125 4.5V6.5C35.1775 6.5 37.5 8.82252 37.5 11.6875H39.5ZM32.3125 39.5C36.282 39.5 39.5 36.282 39.5 32.3125H37.5C37.5 35.1775 35.1775 37.5 32.3125 37.5V39.5ZM4.5 32.3125C4.5 36.282 7.71795 39.5 11.6875 39.5V37.5C8.82252 37.5 6.5 35.1775 6.5 32.3125H4.5ZM6.5 11.6875C6.5 8.82252 8.82252 6.5 11.6875 6.5V4.5C7.71795 4.5 4.5 7.71795 4.5 11.6875H6.5ZM16.5739 24.2797C16.6465 24.2181 16.7075 24.1551 16.7315 24.1307L15.305 22.7289C15.2973 22.7367 15.2919 22.7421 15.2869 22.7472C15.2821 22.7521 15.2789 22.7552 15.2767 22.7573C15.2721 22.7618 15.2743 22.7595 15.281 22.7537L16.5739 24.2797ZM12.8461 27.4382L16.5739 24.2797L15.281 22.7537L11.5532 25.9123L12.8461 27.4382ZM12.8163 27.4615C12.8078 27.4737 12.8033 27.4776 12.808 27.4727C12.8131 27.4675 12.8242 27.4568 12.8461 27.4382L11.5532 25.9123C11.4488 26.0008 11.3028 26.135 11.1747 26.3191L12.8163 27.4615ZM12.6875 27.872C12.6875 27.7247 12.7327 27.5815 12.8163 27.4615L11.1747 26.3191C10.8586 26.7733 10.6875 27.3149 10.6875 27.872H12.6875ZM12.6875 31.4531V27.872H10.6875V31.4531H12.6875ZM12.5469 31.3125C12.6245 31.3125 12.6875 31.3755 12.6875 31.4531H10.6875C10.6875 32.48 11.52 33.3125 12.5469 33.3125V31.3125ZM31.4531 31.3125H12.5469V33.3125H31.4531V31.3125ZM31.3125 31.4531C31.3125 31.3755 31.3755 31.3125 31.4531 31.3125V33.3125C32.48 33.3125 33.3125 32.48 33.3125 31.4531H31.3125ZM31.3125 24.8885V31.4531H33.3125V24.8885H31.3125ZM31.0915 24.3701C31.2327 24.5056 31.3125 24.6928 31.3125 24.8885H33.3125C33.3125 24.1482 33.0106 23.44 32.4766 22.9273L31.0915 24.3701ZM27.9099 21.3157L31.0915 24.3701L32.4766 22.9273L29.295 19.873L27.9099 21.3157ZM28.1033 21.3171C28.0487 21.368 27.9638 21.3674 27.9099 21.3157L29.295 19.873C28.5828 19.1892 27.4604 19.1813 26.7386 19.855L28.1033 21.3171ZM22.2127 26.8534L28.1058 21.3147L26.7361 19.8573L20.843 25.396L22.2127 26.8534ZM19.6136 26.7981C20.3132 27.5126 21.4662 27.5501 22.2101 26.8558L20.8455 25.3936C20.9021 25.3408 20.989 25.3441 21.0427 25.3989L19.6136 26.7981ZM19.5967 26.7808L19.6122 26.7966L21.0441 25.4004L21.0286 25.3845L19.5967 26.7808ZM19.5737 26.7567C19.5674 26.7513 19.5654 26.7491 19.5697 26.7533C19.5718 26.7553 19.5747 26.7583 19.5792 26.7629C19.5839 26.7676 19.5889 26.7727 19.596 26.7801L21.0293 25.3852C21.007 25.3623 20.9503 25.3032 20.8832 25.245L19.5737 26.7567ZM16.7029 24.2701L19.5737 26.7567L20.8831 25.245L18.0123 22.7584L16.7029 24.2701ZM16.5561 24.1293C16.5785 24.1523 16.6354 24.2117 16.7029 24.2701L18.0123 22.7584C18.0186 22.7638 18.0206 22.766 18.0163 22.7618C18.0142 22.7597 18.0113 22.7568 18.0068 22.7522C18.0021 22.7474 17.9971 22.7423 17.9899 22.7349L16.5561 24.1293ZM16.5417 24.1145L16.5568 24.13L17.9892 22.7342L17.9741 22.7187L16.5417 24.1145ZM16.7456 24.1163C16.6889 24.1737 16.5995 24.1736 16.543 24.1158L17.9727 22.7173C17.2473 21.9756 16.0521 21.9733 15.3235 22.7101L16.7456 24.1163ZM16.7307 24.1315L16.747 24.1149L15.3221 22.7115L15.3058 22.7281L16.7307 24.1315ZM29.4242 13.7184H30.014V11.7184H29.4242V13.7184ZM29.014 12.7184V13.2179H31.014V12.7184H29.014ZM30.014 12.2179H29.4242V14.2179H30.014V12.2179ZM30.4242 13.2179V12.7184H28.4242V13.2179H30.4242Z"
                                    fill="white"
                                />
                            </svg>
                        ),
                        title: "High Quality product",
                        description: "Get crips,clean edges on your processed images",
                    },
                    {
                        svg: (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="44"
                                viewBox="0 0 44 44"
                                fill="none"
                            >
                                <path
                                    d="M38.5 22C38.5 31.1127 31.1127 38.5 22 38.5C12.8873 38.5 5.5 31.1127 5.5 22C5.5 12.8873 12.8873 5.5 22 5.5C24.5888 5.5 27.0383 6.09618 29.2188 7.15873M35.4062 11.6875L20.9688 26.125L16.8438 22"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ),
                        title: "Easy to use",
                        description: "No technical skills required. Just upload and go",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="grid gap-2 pe-4 xl:pe-12 place-content-start bg-[#2D2D2D] p-4 xl:p-6
                        rounded-lg"
                    >
                        {item.svg}
                        <span className="text-lg xl:text-2xl font-bold">{item.title}</span>
                        <span className="text-sm xl:text-lg">{item.description}</span>
                    </div>
                ))}
            </div>
            <div className="max-w-6xl container py-24">
                <div className="bg-[#2D2D2D] p-4 md:p-6 rounded-xl space-y-12">
                    <span className="text-lg md:text-2xl font-bold">
                        Why Choose Photocess bg remover?
                    </span>
                    <div className="space-y-6">
                        {[
                            {
                                title: "Professional-Grade Results",
                                desc: "Our Al-powered technology ensures clean, precise background removal for any image.",
                            },
                            {
                                title: "Time-Saving Solution",
                                desc: "Process images in seconds, not hours. Perfect for bulk editing and tight deadlines.",
                            },
                            {
                                title: "Versatile Applications",
                                desc: "Ideal for e-commerce, graphic design, social media content, and more",
                            },
                            {
                                title: "No Technical Skills Required",
                                desc: "User-friendly interface makes it easy for anyone to achieve professional results.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    className="size-10 md:size-6"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M11.9339 27.5295C8.23067 26.6608 5.33916 23.7693 4.4705 20.0661C3.84316 17.3917 3.84316 14.6083 4.4705 11.9339C5.33916 8.23068 8.23067 5.33916 11.9339 4.4705C14.6083 3.84317 17.3917 3.84317 20.0661 4.4705C23.7693 5.33916 26.6608 8.23067 27.5295 11.9339C28.1568 14.6083 28.1568 17.3917 27.5295 20.0661C26.6608 23.7693 23.7693 26.6608 20.0661 27.5295C17.3917 28.1568 14.6083 28.1568 11.9339 27.5295Z"
                                        stroke="#0095FF"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M11.9339 27.5295C14.6083 28.1568 17.3917 28.1568 20.0661 27.5295C23.7693 26.6608 26.6608 23.7693 27.5295 20.0661C28.1568 17.3917 28.1568 14.6083 27.5295 11.9339C26.6608 8.23067 23.7693 5.33916 20.0661 4.4705C17.3917 3.84317 14.6083 3.84317 11.9339 4.4705C8.23067 5.33916 5.33916 8.23068 4.4705 11.9339"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M12.333 15.6668L14.9997 18.3335L19.6663 13.3335"
                                        stroke="#0095FF"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="grid gap-1">
                                    <span className="text-lg md:text-xl font-semibold">{item.title}</span>
                                    <span className="text-sm md:text-base font-normal">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-6xl container py-12 flex justify-center flex-wrap gap-6 items-center">
                {[
                    {
                        firstImage: "/beautiful little girl.png",
                        secondImage: "/beautiful little girl bgremoved.png",
                    },
                    {
                        firstImage: "/anime machanical girl.png",
                        secondImage: "/anime machanical girl bgremoved.png",
                    },
                    {
                        firstImage: "/Pet.png",
                        secondImage: "/Pet bgremoved.png",
                    },
                    {
                        firstImage: "/gamming laptop.png",
                        secondImage: "/gamming laptop bgremoved.png",
                    },
                ].map((item, index) => (
                    <div className="" key={index}>
                        <Compare
                            firstImage={item.firstImage}
                            secondImage={item.secondImage}
                            initialSliderPercentage={50}
                            slideMode="drag"
                            showHandlebar
                        />
                    </div>
                ))}
            </div>
            <div className="max-w-6xl container py-12 grid place-content-center">
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
                                    className="size-12"
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
                                    className="size-12"
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
                                    className="size-12"
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
                            className="w-full bg-white hover:bg-white/90 text-sm xl:text-lg p-6"
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
