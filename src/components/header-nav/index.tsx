'use client';

import { useState } from 'react';
import Link from 'next/link';

const HeaderNav = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <button
                onClick={handleToggle}
                data-collapse-toggle="mobile-menu-2"
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <Link href="/" className="block py-2 pr-4 pl-3 text-white rounded" aria-current="page">
                        Home
                    </Link>
                    <Link href="/destinations" className="block py-2 pr-4 pl-3 text-white rounded" aria-current="page">
                        All Inclusive
                    </Link>
                    <Link href="/inspired" className="block py-2 pr-4 pl-3 text-white rounded" aria-current="page">
                        Get Inspired
                    </Link>
                    <Link href="/news" className="block py-2 pr-4 pl-3 text-white rounded" aria-current="page">
                        News
                    </Link>
                    <Link href="/contact" className="block py-2 pr-4 pl-3 text-white rounded" aria-current="page">
                        Contact
                    </Link>
                </ul>
            </div >
        </>
    )
}

export default HeaderNav