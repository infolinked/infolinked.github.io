'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import Image from "next/image"
//import { useTransitionRouter } from "next-view-transitions";
//import { useSearchParams } from "next/navigation";
//import { usePathname } from 'next/navigation'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //const searchParams = useSearchParams();
  //const [search, setSearch] = useState(searchParams.get("of") ?? '');
  //const router = useTransitionRouter();
  //const pathname = usePathname()
  //const pathname = usePathname()


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //       router.replace(`/mindmaps?of=${search}`)
  //   }
  // }

  // const handleSearch = () => {
  //   router.replace(`/mindmaps?of=${encodeURIComponent(search)}`);
  // };


  return (
    <nav className="p-4 text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-md ">
      <div className="container flex items-center justify-between mx-auto">
        {/* <div>
            {pathname !== '/' &&
            <button onClick={() => router.back()}>
                <span className="hidden sm:block">Go Back</span>
            </button>}
        </div> */}
        <Link href="/" className="flex items-center text-lg font-bold text-white">
          <Image src={'/static/images/logos/softwarezay.png'} alt="no-data" width={40} height={40} className="h-auto max-w-full p-1 mx-3 bg-gray-100 rounded-full"/>
          <span className="hidden md:block">InfoLinked</span>
        </Link>

        
        {/* <div className="flex flex-grow max-w-3xl px-3 space-x-1">
            <input value={search} type="Search" placeholder="Search Mindmaps" onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} className="p-2 text-black" />
            
            <button onClick={ handleSearch} className="px-2 text-white" >Search</button>
        </div> */}


        <div className="hidden space-x-4 md:flex">
        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/mindmaps" className="text-gray-300 hover:text-white">Mindmaps</Link>
          <Link href="/products" className="text-gray-300 hover:text-white">Products</Link>
          <Link href="/blogs" className="text-gray-300 hover:text-white">Blogs</Link>
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
          <div className="flex flex-col mt-2 space-y-2">
            <Link href="/" className="block text-gray-300 hover:text-white">Home</Link>
            <Link href="/mindmaps" className="text-gray-300 hover:text-white">Mindmaps</Link>
            <Link href="/products" className="text-gray-300 hover:text-white">Products</Link>
            <Link href="/blogs" className="text-gray-300 hover:text-white">Blogs</Link>
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