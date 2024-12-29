import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "스프릿",
  description: "꾸준한 독서를 위해, 스프릿 📚",
  keywords: [
    "독서",
    "스프릿",
    "책",
    "독서기록",
    "꾸준한 독서",
    "독서 기록 앱",
    "독서 기록",
    "독서일기",
    "독서앱",
    "독서관리",
    "독서추천",
    "독서리스트",
    "독서통계",
    "독서목표",
    "독서챌린지",
    "독서플랫폼",
    "독서커뮤니티",
    "독서모임",
    "독서방",
    "독서클럽",
    "책추천",
    "책리뷰",
    "책추천사이트",
    "책추천앱",
    "책추천플랫폼",
    "책추천리스트",
    "책추천커뮤니티",
    "책추천모임",
    "책추천방",
    "책추천클럽",
  ],
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
