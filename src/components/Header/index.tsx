import clsx from 'clsx';
import logo from '../../assets/logo.svg';

interface HeaderProps {
  headerRef: React.RefObject<HTMLElement | null>;
}

export const Header = ({ headerRef }: HeaderProps) => {
  return (
    <header
      ref={headerRef}
      className={clsx(
        'w-full fixed z-50',
        'px-7 py-5 ',
        'overflow-hidden bg-transparent',
        'transition-all duration-500 ease-in-out',

        'before:content-[""] before:absolute before:inset-0',
        'before:bg-linear-to-r before:from-[#2e3345] before:to-[#131418]',
        'before:opacity-0',

        'before:transition-opacity',
        'before:duration-700',
        'before:ease-[cubic-bezier(0.22,1,0.36,1)]',
      )}
    >
      <div className="relative z-10 flex items-center gap-4">
        <img src={logo} className="w-21" />
      </div>
    </header>
  );
};
