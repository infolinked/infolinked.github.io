'use client'

import * as React from 'react';
import BlogComponent from '@/components/blog-component';
//import { Blog } from '@/models/blog';
import { Home } from '@/models/home';
import ProductComponent from '@/components/product-component';
import MindmapComponent from '@/components/mindmap-component';
import SectionHeader from '@/components/section-header';
//import Link from 'next/link';
import SeemoreComponent from '@/components/seemore-component';
const { useState, useEffect } = React;

export default function List() {
  //const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [data, setData] = useState<Home | null>(null);
  const endpoint: string = process.env.NEXT_PUBLIC_END_POINT ?? '';
  if (!endpoint) {
    throw new Error('Environment variable NEXT_PUBLIC_END_POINT is not set');
  }


  // Fetch the JSON data on component mount
  useEffect(() => {
    fetch(
      `${endpoint}/api/master`,
    )
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);
  

  // Display loading message if data is not yet fetched
  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img
          className="w-10 h-10 rounded-full max-w-none"
          src="/images/logos/softwarezay.gif"
        />
        <p className="pl-2 text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white px-2 mx-auto my-8 py-6">
        <div className="px-2 mx-auto my-8 max-w-7xl">
          <SectionHeader caption='Mindmaps' />
          <ul className="grid gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:p-5">
            {data?.mindmaps.slice(0, 9).map((mindmap, index) => (
              <MindmapComponent key={index} mindmap={mindmap} />
            ))}
          </ul>
          <SeemoreComponent link={`/mindmaps`}/>
        </div>
      </div>



      <div className="px-2 mx-auto max-w-7xl">
        <SectionHeader caption='Blogs' /> 
        <ul className="grid gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:p-5">
          {data?.blogs.slice(0, 9).map((blog, index) => (
            <BlogComponent key={index} blog={blog} />
          ))}
        </ul>
        <SeemoreComponent link={`/blogs`}/>
      </div>


      <div className="px-2 mx-auto max-w-7xl">
        <SectionHeader caption='Products' /> 
        <ul className="grid gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:p-5">
          {data?.products.slice(0, 9).map((product, index) => (
            <ProductComponent key={index} product={product} />
          ))}
        </ul>
        <SeemoreComponent link={`/products`}/>
      </div>

    </>
  );
};
