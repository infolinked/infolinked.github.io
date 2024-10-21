import Navbar from "./components/navbar";
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-gray-200 dark:bg-gray-700 bg-gray-200 ">
        <Navbar/>
       
      </div>
    </Suspense>
    </>
  );
}
