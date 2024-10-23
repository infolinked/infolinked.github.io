import Link from 'next/link';

export default function SeemoreComponent({link} : {link : string}) {
  return (
    <div className="py-5 flex justify-center items-center">
      <Link href={link}>
        <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  text-white font-bold py-2 px-4 rounded text-center flex justify-center items-center">
          See more 
        </button>
      </Link>
    </div>
  );
}