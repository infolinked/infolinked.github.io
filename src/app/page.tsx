import Navbar from "./components/navbar";
import { Suspense } from 'react';
import Master from "./master";

export default function Home() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-gray-200 dark:bg-gray-700 bg-gray-200 ">
        <Navbar/>
        <Master />
      </div>
    </Suspense>
    </>
  );
}
