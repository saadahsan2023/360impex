import RouteLoader from '@/components/RouteLoader';
import Header from '@/components/Header';
import './globals.css';
import { Geist, Geist_Mono } from "next/font/google";
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Your Website Title",
  description: "Your description here",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RouteLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
