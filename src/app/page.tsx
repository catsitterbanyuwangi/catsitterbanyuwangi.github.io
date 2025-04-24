'use client';

import clsx from 'clsx';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import FaqSection from '@/components/sections/Faq';

import HeroBackground from '~/images/bg-hero.webp';
import Logo from '~/images/Logo.png';

export default function HomePage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div
      className={clsx(
        'min-h-screen min-w-full',
        mode === 'dark' ? 'bg-dark' : 'bg-white'
      )}
    >
      {/* Navbar */}
      <nav
        className={clsx(
          'sticky top-0 z-50 w-full border-b',
          mode === 'dark'
            ? 'border-gray-800 bg-dark text-gray-100'
            : 'border-gray-200 bg-white text-gray-900'
        )}
      >
        <div className='layout flex h-16 items-center justify-between'>
          <UnstyledLink href='/' className='hover:opacity-80'>
            <Image
              src={Logo}
              alt='Catsitter Banyuwangi Logo'
              className='w-12 h-12 rounded-full object-cover border-2 border-white transition-transform hover:scale-105'
            />
          </UnstyledLink>

          <Button
            variant='ghost'
            size='sm'
            onClick={toggleMode}
            aria-label='Toggle dark mode'
            className='rounded-lg p-2.5'
          >
            {mode === 'dark' ? (
              <Sun className='h-5 w-5' />
            ) : (
              <Moon className='h-5 w-5' />
            )}
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className='flex-1'>
        {/* Hero Section */}
        <section
          className='relative h-[calc(100vh-4rem)] w-full'
          style={{
            backgroundImage: `url(${HeroBackground.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Hero Content */}
          <div className='relative flex h-full w-full flex-col items-center justify-center text-center px-4'>
            <div
              className={clsx(
                'max-w-3xl p-8 rounded-lg',
                mode === 'dark' ? 'bg-dark/90' : 'bg-white/90'
              )}
            >
              <h1
                className={clsx(
                  'text-4xl font-bold md:text-5xl',
                  mode === 'dark' ? 'text-gray-100' : 'text-gray-900'
                )}
              >
                Selamat Datang di Catsitter Banyuwangi
              </h1>

              <p
                className={clsx(
                  'mt-4 text-lg md:text-xl',
                  mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                )}
              >
                Dengan Catsitter andalan di Banyuwangi, kini Anda dapat
                menjalani hari tanpa was‑was dan kucing pun tetap merasa nyaman
                di rumah. 👍
              </p>

              {/* CTA Button */}
              <div className='mt-8 flex justify-center'>
                <div className='w-full max-w-xs sm:max-w-none sm:w-auto'>
                  <ButtonLink
                    variant='primary'
                    className='flex justify-center items-center px-8 py-3 text-base sm:text-lg w-full sm:w-auto mx-auto'
                    href='https://wa.me/6281234581741/?text=Halo%2C%20saya%20tertarik%20untuk%20memesan%20layanan%20untuk%20Catsitter%20Banyuwangi%21'
                  >
                    Hubungi Kami!
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection mode={mode} />
      </main>
    </div>
  );
}
