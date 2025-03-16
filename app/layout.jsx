"use client";
import { DM_Sans } from "next/font/google";
import { useEffect } from "react";
import "../public/assets/scss/style.scss";

import { register } from "swiper/element/bundle";
import { usePathname } from "next/navigation";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Footer3 from "@/components/footers/Footer3";
import Footer2 from "@/components/footers/Footer2";
import { Toaster } from "react-hot-toast";
const DM_SansFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--dm-saans-font",
});
register();
export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then((module) => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  const path = usePathname();
  let wow = null;
  useEffect(() => {
    const { WOW } = require("wowjs");
    wow = new WOW({
      live: false,
      mobile: false,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body className={DM_SansFont.variable}>
        <Header2 /> <MobailHeader1 />
        {children}
        <Toaster position="top-center" />

        <Footer2 />
      </body>
    </html>
  );
}
