import Image from "next/image";
import Link from "next/link";

export default function AdsComponent() {

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-t-lg animate-border z-50">
        <div className="bg-white py-2 px-4 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Link href={`https://linkedin.com/in/aungthuoo`}>
                <Image src={'/static/images/profile/ato.jpeg'} alt="" width={50} height={50} className="max-w-full h-auto rounded-full  bg-gray-100"/>
              </Link>
              <div>
                <p className="text-sm text-gray-700 font-bold">Available for Work</p>
                <p className="text-xs text-gray-500">I am currently open to new opportunities!</p>
                <Link href="https://linkedin.com/in/aungthuoo" className="text-xs text-indigo-500 hover:underline">View more</Link>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              ✖
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
