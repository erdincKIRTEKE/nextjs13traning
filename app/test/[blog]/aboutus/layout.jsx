import React from "react";

export default function aboutusLayout({ children, ...rest }) {
  console.log(rest);

  return (
    <div>
      <h2>Coming from aboutus Layout</h2>
      <div>{children}</div>
    </div>
  );
}
