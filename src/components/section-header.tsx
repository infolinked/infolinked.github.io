import { Suspense } from "react";

export default function SectionHeader({ caption }: { caption : string }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex justify-center text-2xl font-bold md:text-3xl">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">
            <h3 className="pt-3">{caption}</h3>
          </div>
        </div>
    </Suspense>
  )
} 