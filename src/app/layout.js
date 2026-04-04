import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

export const metadata = {
  title: "mybhakti | Simple spiritual wellness & meditation",
  description: "A simple and focused platform for your daily spiritual progress and inner peace.",
  keywords: ["Bhakti", "Meditation", "Spiritual", "Wellness", "Peace"],
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
