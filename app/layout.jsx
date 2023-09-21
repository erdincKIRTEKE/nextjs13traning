import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        <header>Header</header>
        {children}

        <footer>Footer</footer>
      </body>
    </html>
  );
}
