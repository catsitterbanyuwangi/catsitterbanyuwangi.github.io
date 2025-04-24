'use client';

import clsx from 'clsx';
import { Minus, Plus } from 'lucide-react';

export default function AccordionItem({
  question,
  answer,
  mode,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  mode: 'dark' | 'light';
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className='border-b border-gray-200 dark:border-gray-700'>
      <button
        onClick={onToggle}
        className='flex w-full items-center justify-between py-4 text-left'
        aria-expanded={isOpen}
      >
        <span
          className={clsx(
            'text-lg font-medium',
            mode === 'dark' ? 'text-gray-100' : 'text-gray-900'
          )}
        >
          {question}
        </span>
        {isOpen ? (
          <Minus
            className={clsx(
              'h-5 w-5 transition-transform',
              mode === 'dark' ? 'text-gray-100' : 'text-gray-900'
            )}
          />
        ) : (
          <Plus
            className={clsx(
              'h-5 w-5 transition-transform',
              mode === 'dark' ? 'text-gray-100' : 'text-gray-900'
            )}
          />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <p
          className={clsx(
            'pb-4',
            mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
