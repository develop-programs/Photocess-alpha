import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div
        className="h-[calc(100vh-6rem)]"
        style={{
          background:
            "radial-gradient(155.35% 155.35% at 50% -17.73%, #000 0%, #191919 43.63%, #343434 68.62%, #666 100%)"
        }}
      >
        <div className="h-full mt-24 max-w-6xl mx-auto flex justify-center">
          <div className="flex flex-col items-center mt-32 gap-4">
            <h2 className="text-6xl font-black text-center leading-normal">
              Easily transform your images into magical creations that meet your
              needs.
            </h2>
            <Button>Explore More</Button>
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-44"
        style={{
          background: "linear-gradient(180deg, #565656 -48.47%, #000 87.79%)"
        }}
      >
        <div className="absolute -mt-52 w-full mx-auto flex items-center justify-center">
          <div className="grid grid-cols-2 place-content-center gap-4">
            <div className="w-96 h-80 bg-slate-300 rounded-xl"></div>
            <div className="w-96 h-80 bg-slate-300 rounded-xl"></div>
            <div className="w-96 h-80 bg-slate-300 rounded-xl"></div>
            <div className="w-96 h-80 bg-slate-300 rounded-xl"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col justify-end items-center py-12">
        {/* Service section */}
        <div className="container py-16 mt-80">
          <div className="grid gap-8 py-16">
            {[
              {
                title: "Background Remover",
                description:
                  "Photocess background remover is a powerful tool that simplifies image editing. With a few clicks, you can isolate your subject from the background, making edits quick and easy. Designed for speed, it allows you to remove backgrounds in seconds, whether you're a beginner or an expert.",
                buttonText: "Try It Now",
                imageSrc: "/bgremover.png",
                imageAlt: "Image upscaler"
              },
              {
                title: "Image resizer",
                description:
                  "Photoshop's image resizer is incredibly user-friendly. With just a few clicks, you can quickly adjust the size of your images without losing quality. It's designed for speed, allowing you to resize multiple images in no time. Perfect for anyone needing efficient image editing!",
                buttonText: "Try It Now",
                imageSrc:
                  "/media_12d729f5e1b50b373d1ef77bd90c7d7925c60ca55.mp4",
                imageAlt: "Image resizer"
              },
              {
                title: "Image Upscaler",
                description:
                  "An AI image upscaler is a digital tool that uses artificial intelligence to enlarge low-resolution images while preserving quality. It analyzes the original image and adds pixels to enhance resolution, keeping the details, textures, and colors intact.",
                buttonText: "Try It Now",
                imageSrc: "/upscaler.mp4",
                imageAlt: "Image upscaler"
              },
              {
                title: "Ai Image Generator",
                description:
                  "An AI image generator is an advanced tool that uses machine learning to create descriptive captions for images, analyzing visual elements to provide context and meaning.",
                buttonText: "Try It Now",
                imageSrc: "/aiGenerated.mp4",
                imageAlt: "aiGenerated image"
              }
            ].map((service, index) => (
              <Card
                key={index}
                className={cn(
                  index % 2 ? "flex-row-reverse" : "flex-row",
                  "py-12 px-24 flex"
                )}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Button
                    variant="gooeyLeft"
                    className="bg-white hover:bg-white/80"
                  >
                    {service.buttonText}
                  </Button>
                </div>
                <div
                  className={cn(
                    index % 2 ? "justify-start" : "justify-end",
                    "flex-1 flex items-center"
                  )}
                >
                  {
                    // @ts-expect-ignore
                    service.imageSrc.endsWith(".mp4") ? (
                      <video
                        src={service.imageSrc}
                        autoPlay
                        loop
                        muted
                        className="rounded-lg"
                        width={200}
                        height={200}
                      />
                    ) : (
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        width={200}
                        height={200}
                        className="size-44 object-cover rounded-lg"
                        loading="lazy"
                        decoding="async"
                      />
                    )
                  }
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* Testimonial Section */}
        <section className="container px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Using Photocess is a breeze! Its user-friendly tools make it
              incredibly easy to navigate, and the powerful features deliver
              impressive results every time.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="User avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold">Jason Brown</p>
                <p className="text-sm text-gray-400">
                  Professional Photographer
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-semibold">
            Join thousands of satisfied users
          </h3>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-zinc-900 border-zinc-800"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>

        <div className="text-sm text-gray-400 mt-8 text-center">
          <p>© 2024 User, Upgraded</p>
          <p>contact@photocess.com</p>
        </div>
      </div>
    </div>
  );
}
