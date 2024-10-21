import Navbar from "@/app/components/navbar";
import Container from "@/components/container";
import React from "react";
import BlogItem from "./blog-item";

export default async function Blog() {
  return (
    <Container>
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* List is purely client-side */}
        {/* <List /> */}
        <Navbar/>
        <BlogItem/>
      </React.Suspense>
    </Container>
  );
}
