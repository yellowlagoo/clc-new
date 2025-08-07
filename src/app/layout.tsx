import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Children's Learning Cottage - Modern Reggio Emilia Preschool in Mountain View",
    template: "%s | Children's Learning Cottage"
  },
  description: "Silicon Valley's premier Reggio Emilia-inspired preschool in Mountain View, California. Cutting-edge early childhood education for ages 2-5 with innovative learning environments.",
  keywords: [
    "preschool Mountain View",
    "Reggio Emilia",
    "early childhood education",
    "Silicon Valley preschool",
    "innovative preschool",
    "child development",
    "tech-forward education",
    "Palo Alto area preschool"
  ],
  authors: [{ name: "Children's Learning Cottage" }],
  creator: "Children's Learning Cottage",
  publisher: "Children's Learning Cottage",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clcottage.com",
    siteName: "Children's Learning Cottage",
    title: "Children's Learning Cottage - Modern Reggio Emilia Preschool in Mountain View",
    description: "Silicon Valley's premier Reggio Emilia-inspired preschool. Cutting-edge early childhood education for ages 2-5.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Children's Learning Cottage - Modern Preschool in Mountain View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Children's Learning Cottage - Modern Reggio Emilia Preschool",
    description: "Silicon Valley's premier Reggio Emilia-inspired preschool in Mountain View, California.",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen font-system text-slate-800 bg-white">
        {children}
      </body>
    </html>
  );
}
