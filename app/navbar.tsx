"use client";

import { useState, useEffect } from 'react';
import FredrikLogo from '@/app/ui/fredrik-logo';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
    <nav className={`sticky top-0 z-50 flex items-center justify-between p-4 ${isScrolled ? 'bg-[#000032]' : 'bg-[#000212]'}`}>
      <div>
        <FredrikLogo />
      </div>
      <div className="flex items-center gap-4">
        <Link href="/">
          <span className="text-white hover:text-gray-200">Home</span>
        </Link>
        <Link href="https://github.com/fredrir">
          <span className="text-white hover:text-gray-200">Github</span>
        </Link>
        {/* Add more navigation links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;