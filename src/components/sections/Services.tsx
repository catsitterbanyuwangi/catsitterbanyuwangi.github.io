'use client';

import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import { Cat, Home, Syringe } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import { NextButton, PrevButton } from '@/components/buttons/CarouselButtons';

type Mode = 'dark' | 'light';

export default function ServicesSection({ mode }: { mode: Mode }) {
  const services = [
    {
      icon: Cat,
      title: 'Perawatan Harian',
      description:
        'Pemberian makan, grooming, dan interaksi harian dengan kucing kesayangan Anda',
    },
    {
      icon: Syringe,
      title: 'Perawatan Medis',
      description:
        'Pemberian obat, suntikan, dan perawatan kesehatan profesional oleh ahli',
    },
    {
      icon: Home,
      title: 'Penitipan di Rumah',
      description:
        'Penitipan kucing di lingkungan rumah Anda dengan pengawasan 24 jam',
    },
  ];

  // Theme configuration
  const theme = {
    // Background colors for main container
    background: mode === 'dark' ? 'bg-dark' : 'bg-white',

    // Text colors
    text: {
      primary: mode === 'dark' ? 'text-gray-100' : 'text-gray-900', // Main text color
      secondary: mode === 'dark' ? 'text-gray-300' : 'text-gray-600', // Secondary/subtext color
    },

    // Card styling
    card: mode === 'dark' ? 'bg-gray-800/80' : 'bg-gray-100/90', // Card background with opacity
    cardHover: mode === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray', // Hover state

    // Icon colors
    icon: mode === 'dark' ? 'text-primary-300' : 'text-primary-600', // Primary icon color

    // Dot navigation styling
    dot: {
      base: mode === 'dark' ? 'bg-gray-600' : 'bg-gray-300', // Inactive dot color
      active: mode === 'dark' ? 'bg-primary-300' : 'bg-primary-600', // Active dot color
    },

    // Button styling
    button: {
      text: mode === 'dark' ? 'text-gray-300' : 'text-gray-600', // Button text color
      hover: mode === 'dark' ? 'hover:text-gray-100' : 'hover:text-gray-900', // Hover text color
      ring:
        mode === 'dark' ? 'focus:ring-primary-300' : 'focus:ring-primary-600', // Focus ring color
    },
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    loop: true,
    breakpoints: {
      '(min-width: 768px)': { active: false },
    },
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      className={clsx('safe-paddings py-20', theme.background)}
      aria-label='Layanan kami'
    >
      <div className='layout'>
        <h2
          className={clsx(
            'text-center text-3xl font-bold md:text-4xl',
            theme.text.primary
          )}
        >
          Layanan Kami
        </h2>

        <div className='mt-12'>
          {/* Mobile Carousel */}
          <div className='md:hidden'>
            <div className='embla__viewport overflow-hidden' ref={emblaRef}>
              <div className='embla__container flex'>
                {services.map((service, idx) => (
                  <article
                    key={idx}
                    className={clsx(
                      'embla__slide flex-[0_0_100%] min-w-0 mx-4',
                      'md:mx-0 md:flex-[0_0_calc(33.33%-1.5rem)]',
                      'flex flex-col items-center rounded-xl p-8',
                      'transition-all duration-300 hover:scale-[1.02] hover:shadow-lg',
                      'md:hover:shadow-xl',
                      theme.card,
                      theme.cardHover
                    )}
                    role='region'
                    aria-labelledby={`service-${idx}-title`}
                  >
                    <div className='flex flex-col items-center text-center h-full'>
                      <service.icon
                        className={clsx(
                          'h-12 w-12 transition-colors',
                          theme.icon
                        )}
                      />
                      <h3
                        id={`service-${idx}-title`}
                        className={clsx(
                          'mt-4 text-xl font-semibold',
                          theme.text.primary
                        )}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 text-sm md:text-base',
                          theme.text.secondary
                        )}
                      >
                        {service.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className='flex justify-between mt-6 px-4'>
              <PrevButton
                onClick={scrollPrev}
                enabled={prevBtnEnabled}
                className={clsx(
                  theme.button.text,
                  theme.button.hover,
                  theme.button.ring
                )}
              />
              <NextButton
                onClick={scrollNext}
                enabled={nextBtnEnabled}
                className={clsx(
                  theme.button.text,
                  theme.button.hover,
                  theme.button.ring
                )}
              />
            </div>

            {/* Dots */}
            <div className='flex justify-center mt-6'>
              <div className='flex space-x-2'>
                {scrollSnaps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    className={clsx(
                      'w-3 h-3 rounded-full transition-colors',
                      theme.dot.base,
                      selectedIndex === idx && theme.dot.active
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className='hidden md:grid md:grid-cols-3 md:gap-6'>
            {services.map((service, idx) => (
              <article
                key={idx}
                className={clsx(
                  'rounded-xl p-8 transition-all duration-300',
                  'hover:scale-[1.02] hover:shadow-xl',
                  theme.card,
                  theme.cardHover
                )}
                role='region'
                aria-labelledby={`desktop-service-${idx}-title`}
              >
                <div className='flex flex-col items-center text-center h-full'>
                  <service.icon
                    className={clsx('h-12 w-12 transition-colors', theme.icon)}
                  />
                  <h3
                    className={clsx(
                      'mt-4 text-xl font-semibold',
                      theme.text.primary
                    )}
                  >
                    {service.title}
                  </h3>
                  <p className={clsx('mt-2 text-base', theme.text.secondary)}>
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
