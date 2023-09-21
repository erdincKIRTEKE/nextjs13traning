import React from "react";
import { notFound } from "next/navigation";

function Blog({ searchParams }) {
  // simulating an error by writing a query param:
  //http://localhost:3000/test/random?error=true
  if (searchParams.error === "true") {
    throw new Error("Error in BlogPage");
  }

  // simulating a not found by writing a query param: http://localhost:3000/test/random?test=true
  if (searchParams.test === "true") {
    notFound();
  }

  return (
    <div>
      <h2> BlogPage</h2>
    </div>
  );
}

export default Blog;
