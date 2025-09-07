import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moodiary",
  description: "감정 일기 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-secondary font-kyobo">{children}</body>
    </html>
  );
}
