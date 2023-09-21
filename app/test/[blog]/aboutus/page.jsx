import React from "react";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Aboutus() {
  await delay(3000);

  return <div>aboutus Page</div>;
}
export default Aboutus;
