import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

export const metadata = {
  title: "mybhakti | Simple spiritual wellness & meditation",
  description: "A simple and focused platform for your daily spiritual progress and inner peace.",
  keywords: ["Bhakti", "Meditation", "Spiritual", "Wellness", "Peace"],
  icons: {
    icon: "/logoformeta.png",
    apple: "/logoformeta.png",
    shortcut: "/logoformeta.png",
  },
  openGraph: {
    title: "mybhakti | Simple spiritual wellness & meditation",
    description: "A simple and focused platform for your daily spiritual progress and inner peace.",
    url: "https://mybhakti.com",
    siteName: "mybhakti",
    images: [
      {
        url: "/logoformeta.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mybhakti | Simple spiritual wellness & meditation",
    description: "A simple and focused platform for your daily spiritual progress and inner peace.",
    images: ["/logoformeta.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <SmoothScroll>
          <div className="relative min-h-screen flex flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
