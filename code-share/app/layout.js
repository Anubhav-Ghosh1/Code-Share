import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Code Share",
  description: "Code Share",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="w-screen h-screen"
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
