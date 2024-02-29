import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ProfilePic from "./components/ProfilePic";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AlisherSk Blog",
  description: "Created by AlisherSk",
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
      </body>
    </html>
  );
}
