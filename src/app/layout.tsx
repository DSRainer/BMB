import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google"
import type React from "react" // Import React

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "BookMyBirthday | Illuminate Your Birthday Experience",
  description: "Crafting unforgettable moments with style and elegance. Event planning for birthdays, weddings, corporate events, and private celebrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
