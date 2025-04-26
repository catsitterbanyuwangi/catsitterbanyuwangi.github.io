'use client';

import clsx from 'clsx';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import FaqSection from '@/components/sections/Faq';
import Footer from '@/components/sections/Footer';

import HeroBackground from '~/images/bg-hero.webp';
import Logo from '~/images/Logo.png';

export default function HomePage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme) {
      setMode(savedTheme === 'dark' ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setMode(systemDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', systemDark);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newMode);
      document.documentElement.classList.toggle('dark');
      return newMode;
    });
  };

  return (
    <div
      className={clsx(
        'min-h-screen min-w-full',
        mode === 'dark' ? 'bg-dark' : 'bg-white'
      )}
    >
      {/* Navbar */}
      <header className='fixed top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm'>
        <nav
          className={clsx(
            'relative max-w-2xl w-full border mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto transition-all duration-300',
            isMenuOpen ? 'rounded-lg' : 'rounded-full',
            mode === 'dark'
              ? 'bg-dark/80 border-gray-800 backdrop-blur'
              : 'bg-white/80 border-gray-200 backdrop-blur',
            'md:rounded-full'
          )}
        >
          <div className='px-4 md:px-0 flex justify-between items-center'>
            {/* Logo Section */}
            <div className='flex items-center'>
              <UnstyledLink
                href='/'
                className='hover:opacity-80 flex items-center'
              >
                <Image
                  src={Logo}
                  alt='Catsitter Banyuwangi Logo'
                  priority
                  className={clsx(
                    'h-8 w-8 rounded-full border-2 object-cover transition-transform hover:scale-105',
                    mode === 'dark' ? 'border-dark' : 'border-white'
                  )}
                />
                <span
                  className={clsx(
                    'ml-2 text-sm font-medium md:text-base whitespace-nowrap',
                    mode === 'dark' ? 'text-gray-100' : 'text-dark'
                  )}
                >
                  Catsitter Banyuwangi
                </span>
              </UnstyledLink>
              <div className='ms-1 sm:ms-2'>
                {/* Optional: Tambahkan text/icon tambahan di sini */}
              </div>
            </div>

            {/* Mobile Toggle Button */}
            <div className='md:hidden'>
              <button
                type='button'
                onClick={toggleMenu}
                className='hs-collapse-toggle flex justify-center items-center size-7 border text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200'
                aria-label='Toggle navigation'
                aria-controls='mobile-menu'
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg
                    className='shrink-0 size-4'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M18 6 6 18' />
                    <path d='m6 6 12 12' />
                  </svg>
                ) : (
                  <svg
                    className='shrink-0 size-3.5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='3' x2='21' y1='6' y2='6' />
                    <line x1='3' x2='21' y1='12' y2='12' />
                    <line x1='3' x2='21' y1='18' y2='18' />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <div
            className={clsx(
              'hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block',
              !isMenuOpen && 'hidden'
            )}
            id='mobile-menu'
          >
            <div className='flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7'>
              <UnstyledLink
                href='#'
                className={clsx(
                  'py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 font-medium focus:outline-none',
                  mode === 'dark'
                    ? 'border-gray-300 text-gray-100'
                    : 'border-gray-800 text-gray-900'
                )}
              >
                Home
              </UnstyledLink>
              <UnstyledLink
                href='#'
                className={clsx(
                  'py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent focus:outline-none',
                  mode === 'dark'
                    ? 'text-gray-300 hover:text-gray-100'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                Layanan
              </UnstyledLink>
              <UnstyledLink
                href='#'
                className={clsx(
                  'py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent focus:outline-none',
                  mode === 'dark'
                    ? 'text-gray-300 hover:text-gray-100'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                Tentang
              </UnstyledLink>
              <UnstyledLink
                href='#'
                className={clsx(
                  'py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent focus:outline-none',
                  mode === 'dark'
                    ? 'text-gray-300 hover:text-gray-100'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                FAQ
              </UnstyledLink>

              {/* Dark Mode Toggle */}
              <div className='flex items-center ps-4 md:ps-0'>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={toggleMode}
                  aria-label='Toggle dark mode'
                  className={clsx(
                    'rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700',
                    mode === 'dark' ? 'text-gray-100' : 'text-gray-900'
                  )}
                >
                  {mode === 'dark' ? (
                    <Sun className='h-4 w-4' />
                  ) : (
                    <Moon className='h-4 w-4' />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className='flex-1'>
        {/* Hero Section */}
        <section
          className='relative h-screen w-full pt-20'
          style={{
            backgroundImage: `url(${HeroBackground.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Hidden image for eager loading */}
          <Image
            src={HeroBackground.src}
            alt='Hero background'
            priority
            className='hidden'
            width={1536}
            height={1024}
          />
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

      {/* Footer Section */}
      <Footer mode={mode} />
    </div>
  );
}
