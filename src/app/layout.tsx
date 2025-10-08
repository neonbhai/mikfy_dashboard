import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MIKFY Dashboard",
  description:
    "Dashboard for MIKFY - Manage your Korean beauty products business",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/x-icon",
        url: "/favicon-black.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        url: "/favicon-white.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/icon.svg",
      },
    ],
    // Add fallback for browsers that don't support media queries
    shortcut: "/favicon-white.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex">
          <Sidebar />
          <main className="flex-1 bg-[#FAFAFC]">{children}</main>
        </div>
      </body>
    </html>
  );
}
