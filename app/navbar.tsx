'use client';

import { useState, useEffect } from 'react';
import FredrikLogo from '@/app/ui/fredrik-logo';
import Link from 'next/link';
import LinkLogo from '@/app/ui/link-logo';
import { GitLogo } from '@/app/ui/link-logo';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-colors w-full ${
        isScrolled ? 'bg-[#000032]' : 'bg-transparent'
      }`}
    >
      <div>
        <FredrikLogo />
      </div>
      <div className="navbar-links hidden items-center gap-10 md:flex">
        <Link href="/">
          <div className="home-box rounded border-2 border-white p-4 shadow-lg">
            <p className="home-text text-white hover:text-gray-200">Home</p>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded border-2 border-white p-4 shadow-lg">
            <span className="text-white hover:text-gray-200">CV</span>
          </div>
        </Link>
        <Link href="https://github.com/fredrir">
          <GitLogo />
        </Link>
        <Link href="https://www.linkedin.com/in/fredrik-carsten-hansteen-655287281/">
          <LinkLogo />
        </Link>
        <Link href={''}>
          <div className="cv-box  rounded border-2 border-white p-4 shadow-lg">
            <p className="cv-text text-shadow text-lg font-semibold text-white">
              Contact me
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-hamburger md:hidden">
        <Bars3Icon
          className="h-10 w-10 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
