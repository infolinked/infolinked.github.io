import * as React from 'react';
import { Product } from '@/models/product';
import Link from 'next/link';
import Image from "next/image"

// Define the props interface for ChildComponent
interface ChildComponentProps {
  product: Product;
}

const ProductComponent: React.VFC<ChildComponentProps> = ({ product }) => {
  return (
    <article className="bg-white dark:bg-gray-900 dark:text-white mb-4 break-inside break-inside-avoid p-6 rounded-xl bg-white flex flex-col bg-clip-border max-w-3xl">
      <div className="flex pb-6 items-center justify-between">
        <div className="flex">
          {product.owner && (
            <div className="flex items-center justify-center w-10 mr-4">
             
              <Image src={product.owner.logo} alt={product.owner.name} width={70} height={70} className="object-cover object-cover"/>
            </div>
          )}

          <div className="flex flex-col">
            <div className="flex items-center">
              <a
                className="inline-block text-lg font-bold mr-2 cursor-pointer"
                href="#"
              >
                {product.owner && product.owner.name}
              </a>
              {/* <span className="text-slate-500">Johnson &amp; Johnson</span> */}
            </div>
            <div className="text-black dark:text-white">{product.title}</div>
            
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 content-stretch py-4">
        {product.images.slice(0, 2).map((image, index) => (
          <a className="flex" href={product.link} key={index}>
            <Image src={image} alt="no-data" width={150} height={150} className="object-cover object-cover"/>
          </a>
        ))}
      </div>

      <h2 className="text-3xl font-extrabold">
        <a href={'/products/' + product.slug} className="cursor-pointer">
          {product.sub_title}
        </a>
      </h2>
      <div className="py-1">
        <strong className="text-black dark:text-white">
          {product.client.name}
        </strong>
      </div>
      {product.description && (
        <div className="py-4">
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      )}
      {product.link && (
        <div className="pt-6">
          <div className="w-full">
            <Link
              href="#"
              target="_blank"
              className="dark:bg-gray-700 dark:text-white py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75 cursor-pointer"
            >
              View more
            </Link>
          </div>
        </div>
      )}
    </article>
  );
};
export default ProductComponent;
