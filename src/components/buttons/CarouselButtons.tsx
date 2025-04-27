import clsx from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

/**
 * Props for the PrevButton and NextButton components.
 *
 * @property onClick - Function to handle button click events.
 * @property enabled - Determines whether the button is enabled or disabled.
 * @property className - Additional custom class names for styling.
 */
type ButtonProps = {
  onClick: () => void;
  enabled: boolean;
  className?: string;
};

/**
 * Button component that navigates to the previous slide.
 *
 * Renders a circular button with an arrow icon pointing to the left.
 * It becomes visually disabled and unclickable when `enabled` is false.
 *
 * @param onClick - Handler function to be called when the button is clicked.
 * @param enabled - Boolean flag to enable or disable the button.
 * @param className - Optional additional class names for custom styling.
 */
export function PrevButton({ onClick, enabled, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className={clsx(
        'p-2 rounded-full transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        className,
        !enabled && 'opacity-50 cursor-not-allowed' // Apply reduced opacity and change cursor when disabled
      )}
      aria-label='Previous slide' // Assistive label for screen readers
    >
      <ArrowLeft className='h-5 w-5' />{' '}
      {/* Left arrow icon inside the button */}
    </button>
  );
}

/**
 * Button component that navigates to the next slide.
 *
 * Renders a circular button with an arrow icon pointing to the right.
 * It becomes visually disabled and unclickable when `enabled` is false.
 *
 * @param onClick - Handler function to be called when the button is clicked.
 * @param enabled - Boolean flag to enable or disable the button.
 * @param className - Optional additional class names for custom styling.
 */
export function NextButton({ onClick, enabled, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className={clsx(
        'p-2 rounded-full transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        className,
        !enabled && 'opacity-50 cursor-not-allowed' // Apply reduced opacity and change cursor when disabled
      )}
      aria-label='Next slide' // Assistive label for screen readers
    >
      <ArrowRight className='h-5 w-5' />{' '}
      {/* Right arrow icon inside the button */}
    </button>
  );
}
