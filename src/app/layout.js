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

export const metadata = {
  title: "Catsitter Banyuwangi",
  description: "Layanan Jasa Catsitter dan Jasa Titip Kucing terpercaya di Banyuwangi",
  // metadataBase: new URL("https://username.github.io"), // Ganti dengan URL Anda
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              var storedTheme = localStorage.getItem('theme') || 'light';
              if (storedTheme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
