import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "스프릿",
  description: "꾸준한 독서를 위해, 스프릿 📚",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "스프릿",
    description: "꾸준한 독서를 위해, 스프릿 📚",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
