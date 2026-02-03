import { IonIcon } from '@ionic/react';
import clsx from 'clsx';
import { checkmark, close } from 'ionicons/icons';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

interface BadgeProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> {
  status: 'Produtivo' | 'Improdutivo';
}

export const Badge = ({ status, className, ...rest }: BadgeProps) => {
  const isProductive = status === 'Produtivo';

  return (
    <span
      {...rest}
      role="status"
      aria-live="polite"
      className={clsx(
        'w-fit inline-flex px-6 py-2.5 mt-3.5',
        'rounded-4xl',
        'font-bold',
        isProductive
          ? 'bg-[#064E3B] text-[#10B981]'
          : 'bg-[#4B5563] text-gray-300',
        className,
      )}
    >
      <span aria-hidden="true" className="flex items-center justify-center">
        {isProductive ? (
          <IonIcon icon={checkmark} color="" className="text-2xl" />
        ) : (
          <IonIcon icon={close} color="" className="text-2xl" />
        )}
      </span>
      <span>{status.toUpperCase()}</span>
    </span>
  );
};
