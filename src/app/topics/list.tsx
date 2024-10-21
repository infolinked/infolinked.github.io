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
    console.log(of); // Logs query string 'username'
    loadData();
  }, [of]);

  return (
    <>
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl font-extrabold text-center">
          {of?.toUpperCase()}
        </h1>
      </div>

      <div className="m-auto w-11/12 max-w-3xl">
        {data}
      </div>
    </>
  );
}
