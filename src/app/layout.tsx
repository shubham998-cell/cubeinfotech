import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CubeInfoTech - Innovative Web Solutions",
  description:
    "CubeInfoTech provides cutting-edge web development solutions with Next.js, TypeScript, and Tailwind CSS. SEO optimized and performance focused.",
  keywords:
    "Next.js, TypeScript, Tailwind CSS, SEO, Web Development, CubeInfoTech",
  openGraph: {
    title: "CubeInfoTech - Innovative Web Solutions",
    description:
      "CubeInfoTech provides cutting-edge web development solutions with Next.js, TypeScript, and Tailwind CSS. SEO optimized and performance focused.",
    url: "https://www.cubeinfotech.com",
    siteName: "CubeInfoTech",
    images: [
      {
        url: "https://www.cubeinfotech.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CubeInfoTech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CubeInfoTech - Innovative Web Solutions",
    description:
      "CubeInfoTech provides cutting-edge web development solutions with Next.js, TypeScript, and Tailwind CSS. SEO optimized and performance focused.",
    images: ["https://www.cubeinfotech.com/og-image.png"],
    site: "@cubeinfotech",
    creator: "@cubeinfotech",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: "https://www.cubeinfotech.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CubeInfoTech",
    url: "https://www.cubeinfotech.com",
    logo: "https://www.cubeinfotech.com/og-image.png",
    sameAs: [
      "https://www.facebook.com/cubeinfotech",
      "https://twitter.com/cubeinfotech",
      "https://www.linkedin.com/company/cubeinfotech",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
