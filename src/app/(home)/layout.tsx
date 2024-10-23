import Container from "@/components/container";
import React from "react";
import { Suspense } from "react";
import Navbar from "../../components/navbar";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {


    return (
        <div className="flex flex-col">
            <Suspense>
                <Navbar />
            </Suspense>

            <div className="flex-grow">
                <Container>
                    {children}
                </Container>
            </div>
        </div>
    )
} 