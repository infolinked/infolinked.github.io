import Container from "@/components/container";
import React from "react";
import Diagram from "./diagram";
import Navbar from "../../components/navbar"

export default async function Page() {
  return (
    <Container>
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* List is purely client-side */}
        {/* <List /> */}
        <Navbar/>
        <Diagram />
      </React.Suspense>
    </Container>
  );
}
