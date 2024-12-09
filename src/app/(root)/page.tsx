import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div
        className="h-[calc(100vh-6rem)]"
        style={{
          background:
            "radial-gradient(155.35% 155.35% at 50% -17.73%, #000 0%, #191919 43.63%, #343434 68.62%, #666 100%)",
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
          background: "linear-gradient(180deg, #565656 -48.47%, #000 87.79%)",
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

      <div className="h-screen max-w-6xl mx-auto flex flex-col justify-end items-center py-12">
        {/* Testimonial Section */}
        <section className="container mx-auto px-4 py-16 text-center">
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
