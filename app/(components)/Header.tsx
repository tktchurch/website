"use client";
import { useState } from 'react';
import Link from 'next/link';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <nav className="bg-black border-b border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" passHref className="flex items-center">
                            <img src="/assets/images/logo.png" className="mr-3 h-24 sm:h-18" alt="Logo" />
                    </Link>
                    <div className="flex items-center">
                        <button
                            onClick={toggleShowMenu}
                            className="p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded={showMenu ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`w-6 h-6 ${showMenu ? 'hidden' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <svg
                                className={`w-6 h-6 ${showMenu ? '' : 'hidden'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`fixed top-0 left-0 h-screen w-screen bg-black z-50 transition-opacity duration-500 ${
                            showMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                        onClick={toggleShowMenu}
                    >
                        <div className="flex flex-col justify-center h-full items-center">
                            <ul className="flex flex-col text-center">
                                <li>
                                    <Link href="/" passHref onClick={toggleShowMenu}
                                            className="block py-2 px-4 text-white rounded bg-primary-700 font-medium text-lg my-2 hover:bg-gray-900"
                                        >
                                            Home

                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ministries" passHref onClick={toggleShowMenu}
                                            className="block py-2 px-4 text-white rounded bg-primary-700 font-medium text-lg my-2 hover:bg-gray-900"
                                        >
                                            Ministries
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/connect" passHref onClick={toggleShowMenu}
                                            className="block py-2 px-4 text-white rounded bg-primary-700 font-medium text-lg my-2 hover:bg-gray-900"
                                        >
                                            Connect
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app" passHref onClick={toggleShowMenu}
                                            className="block py-2 px-4 text-white rounded bg-primary-700 font-medium text-lg my-2 hover:bg-gray-900"
                                        >
                                            Our App
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/giving" passHref onClick={toggleShowMenu}
                                            className="block py-2 px-4 text-white rounded bg-primary-700 font-medium text-lg my-2 hover:bg-gray-900"
                                        >
                                            Give Online
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex space-x-8">
                            <li>
                                <Link href="/" passHref className="text-white hover:text-white hover:underline hover:underline-offset-8">Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/ministries" passHref className="text-white hover:text-white hover:underline hover:underline-offset-8">Ministries
                                </Link>
                            </li>
                            <li>
                                <Link href="/connect" passHref className="text-white hover:text-white hover:underline hover:underline-offset-8">Connect
                                </Link>
                            </li>
                            <li>
                                <Link href="/app" passHref className="text-white hover:text-white hover:underline hover:underline-offset-8">Our App
                                </Link>
                            </li>
                            <li>
                                <Link href="/giving" passHref className="text-white hover:text-white hover:underline hover:underline-offset-8">Give Online
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
