import * as React from 'react';
import { Blog } from '@/models/blog';
import Link from 'next/link';
import Image from "next/image"

// Define the props interface for ChildComponent
interface ChildComponentProps {
  blog: Blog;
}

const BlogComponent: React.VFC<ChildComponentProps> = ({ blog }) => {
  return (
    <article className="bg-white dark:bg-gray-900 dark:text-white mb-4 break-inside break-inside-avoid p-6 rounded-xl bg-white flex flex-col bg-clip-border max-w-md">
      <div className="flex items-center justify-between">
        <div className="flex">
          <a className="inline-block mr-4" href={`topics/${blog.slug}`}>
            <Image src={blog.author.image} alt="" width={70} height={70} className="object-cover object-cover"/>
          </a>
          <div className="flex flex-col">
            <div className="flex items-center">
              <a className="inline-block text-lg font-bold mr-2" href="#">
                {blog.author.name}
              </a>
              <span className="text-slate-500">{blog.author.position}</span>
            </div>
            <div className="flex items-center">
              <a className="inline-block text-slate-500 text-xs mr-2" href="#">
                {blog.date}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-1 content-stretch py-4">
        {blog.images.map((image, index) => (
          <a className="flex" href={`topics/${blog.slug}`}  key={index}>
              <Image src={`${blog.site}${blog.slug}/${image}`} alt="" width={150} height={150} className="object-cover object-cover"/>
          </a>
        ))}
      </div>
      {/* <div className="flex flex-col gap-1 flex-1">
          <a className="flex h-full" href="#">
            <img
              className="max-w-full rounded-tr-lg rounded-br-lg object-contain"
              src="https://images.pexels.com/photos/247931/pexels-photo-247931.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            />
          </a>
        </div> */}
      <h2 className="text-3xl font-extrabold">
        <a href={`topics/${blog.slug}`} className="cursor-pointer">
          {blog.title}
        </a>
      </h2>

      {blog.description && (
        <div className="py-4">
          <p>{blog.description}</p>
        </div>
      )}

      <div className="pt-6">
        <div className="w-full">
          <Link
            href="/topics/${blog.slug}"
            target="_blank"
            className="dark:bg-gray-700 dark:text-white py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75 cursor-pointer"
          >
            View more
          </Link>
        </div>
      </div>
    </article>
  );
};
export default BlogComponent;
