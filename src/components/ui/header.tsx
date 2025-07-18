"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BookButton from "@/components/ui/book-button";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setIsVisible(false);
      } else { // if scroll up show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  });

  return (
    <header
      className={`w-full flex justify-between items-center px-6 py-4 shadow-sm bg-white/50 sticky top-0 z-10 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="text-2xl font-bold tracking-tight font-tera">BookMyBirthday</div>
      <nav className="flex gap-8 text-base font-medium">
        <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
        <Link href="#about" className="hover:text-blue-600 transition">About</Link>
        <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
      </nav>
      <Link href="/bookings" passHref><BookButton/></Link>
    </header>
  );
};

export default Header;
