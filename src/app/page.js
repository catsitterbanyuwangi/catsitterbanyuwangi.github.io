"use client";

import Navbar from "@/app/components/Navbar";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="pt-20 px-16 md:pt-24">
        <h1 className="text-2xl font-bold">Selamat datang di Catsitter Banyuwangi</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Layanan jasa catsitter & penitipan kebutuhan kucing terpercaya di Banyuwangi. Kami menyediakan layanan
          perawatan terbaik untuk kucing kesayangan Anda.
        </p>
      </section>

      {/* Theme Toggle Positioning */}
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </main>
  );
}
