'use client'

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"; // Hook for query string in client component

export default function List() {
  const searchParams = useSearchParams(); // Safely used in client component
  const of = searchParams.get("of"); // Get 'username' from query string
  const [data, setData] = useState([]);
  
  const loadData = async () => {
    try {
      setData([]); // Replace with actual data loading logic
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, [of]);

  return (
    <>
 

      <div className="relative inline-block">
        <span className="text-2xl font-bold md:text-3xl">
        {of?.toUpperCase()}
        </span>
        <span className="absolute left-0 w-full h-1 rounded-full -bottom-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600"></span>
      </div>



      <div className="w-11/12 max-w-3xl m-auto">
        {data}
      </div>
    </>
  );
}
