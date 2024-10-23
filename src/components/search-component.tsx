'use client'

import { useTransitionRouter } from "next-view-transitions";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import { ChevronLeftIcon } from "@radix-ui/react-icons";


export default function SearchComponent() {
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("of") ?? '');
    const router = useTransitionRouter();
    const pathname = usePathname()

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const timestamp = new Date().getTime(); 
          router.push(`/mindmaps?of=${search}&t=${timestamp}`)
        }
    }


    return (
        <div className="flex items-center justify-between h-20 border-b border-gray-300 shadow-md px-5 space-x-1">
            <div>
                {pathname !== '/' &&
                    <button onClick={() => router.back()}>
                        <ChevronLeftIcon />
                        <span className="hidden sm:block">Go Back</span>
                    </button>}
            </div>

            <div className="flex flex-grow max-w-3xl space-x-1">
                <input value={search} type="Search" placeholder="Search User" onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />

                <div>

                </div>
                <button onClick={() => router.push(`/mindmaps?of=${search}`)} >Search</button>
            </div>

            <div></div>
        </div>
    )
} 
