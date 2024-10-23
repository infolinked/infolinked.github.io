import Navbar from "@/components/navbar";
import Container from "@/components/container";
import React from "react";
import Item from "./item";

export default async function Blog() {
  return (
    <Container>
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* List is purely client-side */}
        {/* <List /> */}
        <Navbar/>
        <Item />
      </React.Suspense>
    </Container>
  );
}
