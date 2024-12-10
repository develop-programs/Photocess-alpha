import Footer from "@/components/custom/Footer";
import DesktopNav from "@/components/custom/Navbar/DesktopNav";
import MobileNav from "@/components/custom/Navbar/MobileNav";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="hidden lg:block bg-bakcground">
        <DesktopNav />
      </div>
      <div className="block lg:hidden bg-bakcground">
        <MobileNav />
      </div>
      <div>{children}</div>

    </main>
  );
}
