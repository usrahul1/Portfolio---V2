"use client";

import "./globals.css";
import { useThemeStore } from "@/store/themeStore";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useThemeStore();
  return (
    <html
      data-theme={theme}
      lang="en"
      className={`${nunito.className} transition-colors duration-300 ease-in-out`}
    >
      <body>{children}</body>
    </html>
  );
}
