'use client';

import clsx from 'clsx';
import * as React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

type FooterProps = {
  mode: 'dark' | 'light';
  ctaText?: string;
  ctaLink?: string;
  ctaLinkProps?: Partial<UnstyledLinkProps>;
  isExternalCta?: boolean; // Flag untuk link eksternal
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
  companyInfo?: {
    name: string;
    builtBy?: string;
  };
};

export default function Footer({
  mode,
  ctaText = 'Hubungi Kami',
  ctaLink = 'https://wa.me/6281234581741/?text=Halo%2C%20saya%20tertarik%20untuk%20memesan%20layanan%20untuk%20Catsitter%20Banyuwangi%21',
  ctaLinkProps = {},
  isExternalCta = true,
  socialLinks = {
    instagram: 'https://www.instagram.com/catsitterbanyuwangi/',
    facebook: 'https://www.facebook.com/catsitterbanyuwangi',
    whatsapp:
      'https://wa.me/6281234581741/?text=Halo%2C%20saya%20tertarik%20untuk%20memesan%20layanan%20untuk%20Catsitter%20Banyuwangi%21',
  },
  companyInfo = {
    name: 'Catsitter Banyuwangi Terakota',
    builtBy: 'Mahardhika Saptadi and Sarjana Canggih Indonesia',
  },
}: FooterProps) {
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);

  // Render CTA Button yang bisa handle external link
  const renderCtaButton = () => {
    const buttonClass = clsx(
      'inline-flex items-center px-4 py-2 border rounded-md transition-colors',
      'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
      mode === 'dark'
        ? 'border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-dark'
        : 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
    );

    if (isExternalCta) {
      return (
        <UnstyledLink
          href={ctaLink}
          className={buttonClass}
          {...ctaLinkProps}
          target='_blank'
          rel='noopener noreferrer'
        >
          {ctaText}
        </UnstyledLink>
      );
    }

    return (
      <UnstyledLink href={ctaLink} className={buttonClass} {...ctaLinkProps}>
        {ctaText}
      </UnstyledLink>
    );
  };

  return (
    <footer
      className={clsx(
        'py-8 text-center mt-auto',
        mode === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'
      )}
    >
      {/* Divider */}
      <div className='layout'>
        <div
          className={clsx(
            'border-t mb-8 mx-auto max-w-3xl',
            mode === 'dark' ? 'border-white/20' : 'border-dark/20'
          )}
        ></div>
      </div>

      {/* Konten Footer - CTA, Social Media, Copyright */}
      <div className='layout'>
        {/* CTA Section */}
        <div className='mb-8'>
          <h3 className='text-xl font-bold mb-4'>
            Butuh Teman untuk Anabul? Kami Siap!
          </h3>
          {renderCtaButton()}
        </div>

        {/* Social Media Links (semua eksternal) */}
        <div className='flex justify-center gap-4 mb-8'>
          {socialLinks.instagram && (
            <UnstyledLink
              href={socialLinks.instagram}
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl text-[#FF0069] transition-colors'
              aria-label='Instagram'
            >
              <FaInstagram />
            </UnstyledLink>
          )}
          {socialLinks.facebook && (
            <UnstyledLink
              href={socialLinks.facebook}
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl text-[#0866FF] transition-colors'
              aria-label='Facebook'
            >
              <FaFacebook />
            </UnstyledLink>
          )}
          {socialLinks.whatsapp && (
            <UnstyledLink
              href={socialLinks.whatsapp}
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl text-[#25D366] transition-colors'
              aria-label='WhatsApp'
            >
              <FaWhatsapp />
            </UnstyledLink>
          )}
        </div>

        {/* Copyright Section */}
        <div className='max-w-3xl mx-auto'>
          <p className='m-0'>
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          {companyInfo.builtBy && (
            <p className='m-0 text-sm mt-2 opacity-80 hidden'>
              Built by {companyInfo.builtBy}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
