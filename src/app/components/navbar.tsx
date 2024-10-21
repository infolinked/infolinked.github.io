'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { useTransitionRouter } from "next-view-transitions";
import { useSearchParams } from "next/navigation";
//import { usePathname } from 'next/navigation'
import Image from "next/image"


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("of") ?? '');
  const router = useTransitionRouter();
  //const pathname = usePathname()



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        router.push(`/topics?of=${search}`)
    }
  }


  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" className="flex items-center text-white text-lg font-bold">
          <Image src={'/static/images/logos/softwarezay.png'} alt="no-data" width={40} height={40} className="mx-3 max-w-full h-auto rounded-full  bg-gray-100 p-1"/>
          <span className="hidden md:block">InfoLinked</span>
        </Link>

        
        <div className="flex flex-grow max-w-3xl space-x-1 px-3">
            <input value={search} type="Search" placeholder="Search Topics" onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}className='p-2'/>
            
            <button onClick={() => router.push(`/topics?of=${search}`)} className="text-white px-2" >Search</button>
        </div>


        <div className="hidden md:flex space-x-4">
          <Link href="/products" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/blogs" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <Link href="/" className="block text-gray-300 hover:text-white">Home</Link>
            <Link href="/about" className="block text-gray-300 hover:text-white">About</Link>
            <Link href="/services" className="block text-gray-300 hover:text-white">Services</Link>
            <Link href="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;