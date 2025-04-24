'use client';

import clsx from 'clsx';
import * as React from 'react';

import AccordionItem from '@/components/accordions/AccordionItem';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FaqSection({ mode }: { mode: 'dark' | 'light' }) {
  const [activeAccordion, setActiveAccordion] = React.useState<number | null>(
    null
  );

  const handleAccordionToggle = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: 'Bagaimana cara memesan layanan catsitter?',
      answer:
        "Anda bisa langsung menghubungi kami melalui tombol 'Hubungi Kami' di atas atau melalui nomor WhatsApp yang tertera.",
    },
    {
      question: 'Berapa tarif layanan per hari?',
      answer:
        'Tarif dasar kami mulai dari Rp 20.000/jam. Harga dapat bervariasi tergantung kebutuhan khusus kucing Anda.',
    },
    {
      question: 'Apakah ada layanan darurat / pemesanan mendadak?',
      answer:
        'Ya, kami menyediakan layanan darurat / pemesanan mendadak 24 jam dengan tambahan biaya 30% dari tarif normal.',
    },
    {
      question: 'Bagaimana sistem pembayarannya?',
      answer:
        'Pembayaran dilakukan secara online melalui transfer bank atau e-wallet setelah konfirmasi jadwal. Kami juga menerima pembayaran tunai di lokasi.',
    },
  ];

  return (
    <section className='py-16'>
      <div className='layout'>
        <h2
          className={clsx(
            'text-3xl font-bold text-center mb-8',
            mode === 'dark' ? 'text-gray-100' : 'text-gray-900'
          )}
        >
          Ada Pertanyaan?
        </h2>
        <div className='max-w-3xl mx-auto'>
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              mode={mode}
              isOpen={activeAccordion === index}
              onToggle={() => handleAccordionToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
