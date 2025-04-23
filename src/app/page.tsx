'use client';

import clsx from 'clsx';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

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
        'min-h-screen min-w-full', // Ini yang membuat full viewport
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

      {/* Main Content - Menggunakan flex untuk mengisi sisa space */}
      <main className='flex-1'>
        {/* Hero Section - Mengisi tinggi penuh */}
        <section className='h-[calc(100vh-4rem)] w-full'>
          {' '}
          {/* 4rem = tinggi navbar */}
          <div className='flex h-full w-full flex-col items-center justify-center text-center'>
            <h1 className='text-4xl font-bold md:text-5xl'>
              Layanan Catsitter Profesional
            </h1>

            <p className='mt-4 text-lg text-gray-600 dark:text-gray-300 md:text-xl'>
              Memberikan perawatan terbaik untuk kucing kesayangan Anda
            </p>

            <div className='mt-8 flex gap-4'>
              <ButtonLink
                variant='primary'
                className='px-8 py-3 text-lg'
                href='/booking'
              >
                Pesan Sekarang
              </ButtonLink>
              <ButtonLink
                variant='outline'
                className='px-8 py-3 text-lg'
                href='/layanan'
              >
                Lihat Layanan
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
