import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between px-5 py-2 bg-primary sticky top-0 z-50">
            <a className="font-bold text-white" href="#">Elackiya</a>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li><a className="hover:bg-secondary px-4 py-2" href="/">Home</a></li>
                    <li><a className="hover:bg-secondary px-4 py-2" href="#about">About</a></li>
                    <li><a className="hover:bg-secondary px-4 py-2" href="#projects">Projects</a></li>
                    <li><a className="hover:bg-secondary px-4 py-2" href="#resume">Resume</a></li>
                    <li><a className="hover:bg-secondary px-4 py-2" href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Slider */}
            <div className={`fixed top-0 right-0 h-full w-[70%] bg-primary transition-transform duration-[1500ms] ease-in-out transform ${toggleMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}>
                <button onClick={() => setToggleMenu(!toggleMenu)} className="absolute top-4 right-4">
                    <XMarkIcon className="text-white h-8 w-8" />
                </button>
                <ul className="flex flex-col mt-16 text-white text-lg">
                    <li><a className="hover:bg-secondary px-5 py-3" href="#">Home</a></li>
                    <li><a className="hover:bg-secondary px-5 py-3" href="#about">About</a></li>
                    <li><a className="hover:bg-secondary px-5 py-3" href="#projects">Projects</a></li>
                    <li><a className="hover:bg-secondary px-5 py-3" href="#resume">Resume</a></li>
                    <li><a className="hover:bg-secondary px-5 py-3" href="#contact">Contact</a></li>
                </ul>
            </div>

            {/* Hamburger Menu Icon */}
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden z-50">
                <Bars3Icon className="text-white h-8 w-8" />
            </button>
        </header>
    );
}
