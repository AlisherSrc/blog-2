import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ProfilePic from "./components/ProfilePic";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AlisherSk Blog",
  description: "Created by AlisherSk",
  openGraph: {
    title: "AlisherSk Blog",
    description: "Created by AlisherSk",
    images: ["https://firebasestorage.googleapis.com/v0/b/alishersk-blog.appspot.com/o/simple_cover.webp?alt=media&token=63f8c615-31ee-421a-b3f0-1aa7e125dd6c"],
    type: "website",
    siteName: "AlisherSk Blog",
  },
  robots: "index,follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <ProfilePic />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
