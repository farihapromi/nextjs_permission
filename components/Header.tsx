import Image from 'next/image';
import Link from 'next/link';

const Header = ({ children }: HeaderProps) => {
  return (
    <div className='header flex items-center justify-between px-4 py-2 gap-2 mb-12'>
      <Link href='/' className='flex items-center'>
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
