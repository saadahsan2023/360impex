import RouteLoader from '@/components/RouteLoader';
import Header from '@/components/Header';
import './globals.css';
import { Geist, Geist_Mono } from "next/font/google";
import Footer from '@/components/Footer';
import CalButton from "../components/CalMeeting";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "360 impex",
  description: "Connecting Pakistan to International Markets",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RouteLoader />
        <Header />
        {children}
        <CalButton />
        <Footer />
      </body>
    </html>
  );
}
