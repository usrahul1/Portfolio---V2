"use client";

import "./globals.css";
import { useThemeStore } from "@/store/themeStore";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
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
      className={`${montserrat.className} transition-colors duration-300 ease-in-out`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
