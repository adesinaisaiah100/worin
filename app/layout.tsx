import type { Metadata, Viewport } from "next";
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

const siteUrl = "https://womenrecognition.ng";
const siteTitle = "Women Recognition For Leadership Development & Advancement Initiative";
const siteDescription =
  "When you need us, we’re here with heart, help, and hands you can trust. Empowering women, building leaders, and fostering support, dignity, and protection across Nigeria.";

export const viewport: Viewport = {
  themeColor: "#2E1A47",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Women Recognition",
  },
  description: siteDescription,
  applicationName: "Women Recognition Initiative",
  authors: [{ name: "Women Recognition Initiative" }],
  keywords: [
    "Women Recognition",
    "Women Recognition Initiative",
    "WORIN",
    "womenrecognition.ng",
    "women empowerment Nigeria",
    "women leadership development",
    "women support network Ibadan",
    "women safety and protection",
    "NGO Nigeria women",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Women Recognition Initiative (WORIN)",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Women Recognition For Leadership Development & Advancement Initiative",
      },
      {
        url: "/Womenlogo.jpeg",
        width: 400,
        height: 400,
        alt: "Women Recognition Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/favicon_folder/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_folder/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_folder/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_folder/favicon.ico" },
    ],
    apple: [{ url: "/favicon_folder/apple-touch-icon.png", sizes: "180x180" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Women Recognition For Leadership Development & Advancement Initiative",
  alternateName: ["WORIN", "Women Recognition", "womenrecognition.ng"],
  url: siteUrl,
  logo: `${siteUrl}/Womenlogo.jpeg`,
  image: `${siteUrl}/og-image.jpg`,
  description: siteDescription,
  email: "yembukad@womenrecognition.ng",
  telephone: "+2349036323604",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18A magazine road, Jericho",
    addressLocality: "Ibadan",
    addressRegion: "Oyo State",
    addressCountry: "NG",
  },
  sameAs: [
    "https://www.facebook.com/share/g/1C32mNv3q2/?mibextid=wwXIfr",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${lobsterTwo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
