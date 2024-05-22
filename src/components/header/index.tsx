import Link from 'next/link';
import HeaderNav from '../header-nav';

const Header = () => {

  return (
    <header className='sticky top-0 z-10'>
      <nav className=" border-gray-200 bg-sky-600	flex justify-center py-6">
        <div className="flex flex-wrap justify-between items-center w-9/12 max-w-screen-xl">
          <Link href='/' className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">JETSET</span>
          </Link>
          <HeaderNav />
        </div>
      </nav>
    </header>
  );
}

export default Header