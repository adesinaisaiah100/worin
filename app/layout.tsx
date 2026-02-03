import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Lobster_Two } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const lobsterTwo = Lobster_Two({
  variable: "--font-lobster-two",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Women Recognition For Leadership Development & Advancement Initiative",
  description:
    "When you need us, we’re here with heart, help, and hands you can trust.",
  icons: {
    icon: [
      { url: "/favicon_folder/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_folder/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_folder/favicon.ico" },
    ],
    apple: [{ url: "/favicon_folder/apple-touch-icon.png", sizes: "180x180" }],
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
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${lobsterTwo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
