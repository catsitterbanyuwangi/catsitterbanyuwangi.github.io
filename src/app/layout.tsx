import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';
import { siteConfig } from '@/constant/config';

// Inisialisasi font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins', // optional jika mau pakai CSS variable
});

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords:
    'catsitter banyuwangi, penitipan kucing, jasa rawat kucing, pet sitter banyuwangi, perawatan kucing profesional, jasa kucing banyuwangi, jasa titip kebutuhan kucing, layanan kucing banyuwangi, jasa antar kucing, layanan catsitter banyuwangi, penitipan hewan peliharaan, perawatan hewan peliharaan, jasa hewan peliharaan banyuwangi',
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const initialTheme = savedTheme ? savedTheme : (systemDark ? 'dark' : 'light');
                if (initialTheme === 'dark') document.documentElement.classList.add('dark');
              })()
            `,
          }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
