import { Suspense } from 'react';

export default function Banner() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative w-full h-[320px]" id="home">
          <div className="absolute inset-0 opacity-70">
              <img src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png" alt="Background Image" className="object-cover object-center w-full h-full" />

          </div>
          <div className="absolute flex flex-col items-center justify-between inset-9 md:flex-row">
              <div className="mb-4 md:w-1/2 md:mb-0">
                  <h1 className="mb-2 text-4xl font-medium leading-tight text-grey-700 md:text-5xl">Bappa Flour mill</h1>
                  <p className="mt-4 mb-8 text-xl font-regular">One stop solution for flour grinding services</p>
               

                  <button className="px-6 py-3 font-bold text-white bg-gray-800 rounded-md text-normal">Contact</button>
                      
              </div>
          </div>
      </div>
    </Suspense>
    </>
  );
}
