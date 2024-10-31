import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div>
          <Navbar />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-cyan-800 text-white px-4 py-3 text-center">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/gabrielcaja" className="group">
              <img src="/github.svg" className="h-10 w-10 invert group-hover:invert-0" alt="GitHub" />
            </a>
            <a href="mailto:gabrielcajaegido@gmail.com" className="group">
              <img src="/email.svg" className="h-10 w-10 invert group-hover:invert-0" alt="Email" />
            </a>
            <a href="https://linkedin.com/in/gabrielcajaegido" className="group">
              <img src="/linkedin.svg" className="h-10 w-10 invert group-hover:invert-0" alt="LinkedIn" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}