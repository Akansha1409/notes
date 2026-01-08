import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google"; // Import Google Font
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Modern Notes App",
  description: "Built with Next.js & MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen`}>
        <div className="max-w-5xl mx-auto p-6">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}