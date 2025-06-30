import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Header = ({ children, className }: HeaderProps) => {
  return (
    // <div className='header flex items-center justify-between px-4 py-2 gap-2 mb-12'>
    <div
      className={cn(
        'flex items-center justify-between px-4 py-2 gap-4',
        className
      )}
    >
      <Link href='/' className='md:flex-1'>
        <Image
          src='/assets/icons/logo.svg'
          alt={'logo'}
          width={120}
          height={32}
          className='hidden md:block'
        />
        <Image
          src='/assets/icons/logo-icon.svg'
          alt={'logo without name'}
          width={32}
          height={32}
          className='mr-2 md:hidden'
        />
      </Link>
      <div className='flex items-center gap-4'>{children}</div>
    </div>
  );
};
export default Header;
