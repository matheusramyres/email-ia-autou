import clsx from 'clsx';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  title: string;
  variant: 'primary' | 'secondary';
}

export const Button = ({ title, variant, className, ...rest }: ButtonProps) => {
  const buttonTypes = {
    primary: clsx(
      'bg-linear-to-t from-[#4F46E5] to-[#7C3AED]',
      'hover:border-[#6960FF]',
      'shadow-[0_0_16px_-6px] shadow-white',
    ),
    secondary: 'bg-[#5D6479] hover:border-[#969696]',
  };
  return (
    <button
      {...rest}
      className={clsx(
        'button-default',
        'border border-transparent ',
        'text-white',
        buttonTypes[variant],
        className,
      )}
    >
      {title}
    </button>
  );
};
