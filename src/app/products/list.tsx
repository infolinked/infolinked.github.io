'use client'

import * as React from 'react';
import ProductComponent from '@/components/product-component';
import { Product } from '@/models/product';
const { useState, useEffect } = React;

const ProductsComponent: React.VFC = () => {
  const [projects, setProjects] = useState<Product[] | null>(null);

  // Fetch the JSON data on component mount
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/aungthuoo/apis/main/projects/index.json',
    )
      .then((response) => response.json())
      .then((jsonData) => setProjects(jsonData))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);

  // Display loading message if data is not yet fetched
  if (!projects) {
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
    <div className="px-2 mx-auto my-8 max-w-7xl">
      <div className="flex justify-center text-2xl font-bold md:text-3xl">
        Products
      </div>
      {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}

      <ul className="grid gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:p-5">
        {projects.slice(0, 10).map((product, index) => (
          <ProductComponent key={index} product={product} />
        ))}
      </ul>

      <div className="max-w-xl mx-auto overflow-hidden rounded-lg shadow-xs">
        <div className="flex justify-center max-w-xl ">
          <a
            href="/products"
            className="block w-full px-4 py-3 text-center transition ease-in-out delay-75 rounded-lg cursor-pointer bg-slate-100 hover:bg-slate-200"
          >
            Show more projects
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProductsComponent;
