import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";

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
      <body className="bg-secondary font-kyobo">
        <ToastContainer position="top-center" autoClose={2000} limit={1} newestOnTop={false} />
        {children}
      </body>
    </html>
  );
}
