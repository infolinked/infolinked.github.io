import * as React from 'react';
import Image from "next/image"
import { Mindmap } from '@/models/mindmap';
import Link from 'next/link';

// Define the props interface for ChildComponent
interface ChildComponentProps {
  mindmap: Mindmap;
}

const MindmapComponent = ({ mindmap }: ChildComponentProps) => {
  return (
        
      <div className=" mx-auto max-w-md p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-t-lg rounded-b-lg animate-border z-50">
        <div className="bg-white py-2 px-4 rounded-t-lg rounded-b-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Link href={mindmap.author.link}>
                <Image src={'/static/images/profile/ato.jpeg'} alt="" width={50} height={50} className="max-w-full h-auto rounded-full  bg-gray-100"/>
              </Link>
              <div className='flex-1'>
                <p className="text-sm font-bold text-gray-700 pb-2">
                  <Link href={`/mindmap?of=${mindmap?.slug}`}>
                    {mindmap?.title}
                  </Link>
                </p>
                <p className="text-xs text-gray-500">
                  <Link href={mindmap.author.link}>{mindmap?.description.slice(0, 60) + '...'}
                  </Link>
                </p>
                <Link href={`/mindmap?of=${mindmap?.slug}`} className="text-xs text-indigo-500 hover:underline">
                  View more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default MindmapComponent;
