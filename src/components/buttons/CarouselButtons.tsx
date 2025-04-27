import clsx from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function PrevButton({
  onClick,
  enabled,
  darkMode,
}: {
  onClick: () => void;
  enabled: boolean;
  darkMode: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className={clsx(
        'p-2 rounded-full transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        darkMode
          ? 'text-gray-300 hover:text-gray-100 focus:ring-primary-300'
          : 'text-gray-600 hover:text-gray-900 focus:ring-primary-600',
        !enabled && 'opacity-50 cursor-not-allowed'
      )}
      aria-label='Previous slide'
    >
      <ArrowLeft className='h-5 w-5' />
    </button>
  );
}

export function NextButton({
  onClick,
  enabled,
  darkMode,
}: {
  onClick: () => void;
  enabled: boolean;
  darkMode: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className={clsx(
        'p-2 rounded-full transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        darkMode
          ? 'text-gray-300 hover:text-gray-100 focus:ring-primary-300'
          : 'text-gray-600 hover:text-gray-900 focus:ring-primary-600',
        !enabled && 'opacity-50 cursor-not-allowed'
      )}
      aria-label='Next slide'
    >
      <ArrowRight className='h-5 w-5' />
    </button>
  );
}
