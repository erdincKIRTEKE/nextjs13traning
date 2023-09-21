import React from "react";
function TestLayout({ children }) {
  return (
    <div>
      <h1>Coming from Test Layout</h1>
      <div>{children}</div>
    </div>
  );
}
export default TestLayout;
