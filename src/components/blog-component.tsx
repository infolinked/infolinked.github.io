import * as React from 'react';
import { Blog } from '@/models/blog';
import Link from 'next/link';
import Image from "next/image"

// Define the props interface for ChildComponent
interface ChildComponentProps {
  blog: Blog;
}

const BlogComponent = ({ blog }: ChildComponentProps) => {
  return (
    <article className=" dark:bg-gray-900 dark:text-white mb-4 break-inside break-inside-avoid p-6 rounded-xl bg-white flex flex-col bg-clip-border max-w-md">
      <div className="flex items-center justify-between">
        <div className="flex">
          <a className="inline-block mr-4" href={`${blog?.author?.link}`}>
            <Image src={blog.author.image} alt="" width={50} height={50} className="max-w-full h-auto rounded-full  bg-gray-100"/>
          </a>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Link href={blog?.author?.link} className="cursor-pointer inline-block text-lg font-bold mr-2">
                {blog?.author?.name}
              </Link>
              <span className="text-slate-500">{blog?.author?.position}</span>
            </div>
            <div className="flex items-center">
              <a className="inline-block text-slate-500 text-xs mr-2" href="#">
                {blog?.date} 
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-1 content-stretch py-4">
        {blog.images.map((image, index) => (
          <Link href={`https://linkedin.com/in/aungthuoo`} key={index}>
              <Image src={`${blog.site}${blog.slug}/${image}`} alt="" width={250} height={250} className="object-cover object-cover w-full"/>
          </Link>
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
        <Link href={`blog?of=${blog.gist}`} className="cursor-pointer">
          {blog.title}
        </Link>
      </h2>

      {blog.description && (
        <div className="py-4">
          <p>{blog.description}</p>
        </div>
      )}

      <div className="pt-6">
        <div className="w-full">
          <Link
            href="/blog?of=${blog.gist}"
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
