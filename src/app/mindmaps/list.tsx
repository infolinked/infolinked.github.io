'use client';

import * as React from 'react';
import { Blog } from '@/models/blog';
import MindmapComponent from '@/components/mindmap-component';
import SectionHeader from '@/components/section-header';
//import { useSearchParams } from 'next/navigation';
// import useHandleError from '../hooks/use-handle-error';
import Image from 'next/image';

const { useState, useEffect } = React;

export default function List() {
  //const searchParams = useSearchParams();
  //const [search] = useState(searchParams.get("of") ?? '');

  const [mindmaps, setMindmaps] = useState<Blog[] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const endpoint: string = process.env.NEXT_PUBLIC_END_POINT ?? '';
  console.log(endpoint); 
  if (!endpoint) {
    throw new Error('Environment variable NEXT_PUBLIC_END_POINT is not set');
  }

  const loadData = async () => {
    try {
      fetch(
        `${endpoint}/api/mindmaps`,
      )
        .then((response) => response.json())
        .then((jsonData) => setMindmaps(jsonData.data))
        .catch((error) => console.error('Error fetching the JSON data:', error));
    } catch (error) {
      console.log(error); 
      // useHandleError(error);
    }
  };

  // Fetch the JSON data on component mount
  useEffect(() => {
    loadData();
  }, []);

  // Display loading message if data is not yet fetched
  if (!mindmaps) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Image src={'/static/images/logos/softwarezay.gif'} alt="no-data" width={40} height={40} className="w-10 h-10 rounded-full max-w-none"/>
        <p className="pl-2 text-xl font-bold">Loading...</p>
      </div>
    );
  }

  // Filter mindmaps based on the search term
  const filteredMindmaps = mindmaps.filter((mindmap) =>
    mindmap.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-2 mx-auto my-8 max-w-7xl">
      <SectionHeader caption='Mindmaps'/>


      <div className="relative mb-6 py-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search mindmaps..."
          className="w-full p-4 pl-12 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-200"
        />
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z"
            />
          </svg>
        </div>
      </div>


      <ul className="grid gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:p-5">
        {filteredMindmaps.map((mindmap, index) => (
          <MindmapComponent key={index} mindmap={mindmap} />
        ))}
      </ul>
    </div>
  );
}
