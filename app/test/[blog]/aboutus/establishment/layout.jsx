import React from "react";
import Other from "./other";

function EstablishmentLayout({ children }) {
  return (
    <div>
      <h3>Comes from EstablishmentLayout</h3>
      <Other />
      {children}
    </div>
  );
}
export default EstablishmentLayout;
