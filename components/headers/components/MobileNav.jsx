"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileNav() {
  const pathname = usePathname();
  const [parentOpen, setParentOpen] = useState(-1);
  const [subMenuOpen, setSubMenuOpen] = useState(-1);
  const closeMobileMenu = () => {
    const container = document.querySelector(".mobile-header-active");
    const burgerIcon = document.querySelector(".burger-icon");
    container?.classList.remove("sidebar-visible");
    burgerIcon?.classList.remove("burger-close");
    document.body.classList.remove("mobile-menu-active");
  };
  return (
    <>
       <li>
        <Link href="/" onClick={closeMobileMenu}>Home</Link>
      </li>
      <li>
        <Link href="/services" onClick={closeMobileMenu}>Services</Link>
      </li>
      <li>
        <Link href="/about" onClick={closeMobileMenu}>About</Link>
      </li>
      <li>
        <Link href="/faqs" onClick={closeMobileMenu}>Faqs</Link>
      </li>
      <li>
        <Link href="/contact" onClick={closeMobileMenu}>Contact</Link>
      </li>
      <li>
        <Link href="/booking" onClick={closeMobileMenu}>Booking</Link>
      </li>
      <li>
        <Link href="/search" onClick={closeMobileMenu}>Search</Link>
      </li>
    </>
  );
}
