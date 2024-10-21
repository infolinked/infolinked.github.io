import Container from "@/components/container";
import List from "./list"; // Import the client-side List component
import React from "react";

export default async function Page() {
  return (
    <Container>
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* List is purely client-side */}
        <List />
      </React.Suspense>
    </Container>
  );
}
