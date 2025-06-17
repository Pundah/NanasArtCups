import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/logo2.png" alt="Nana's Art Cups Logo" width="100" height="100" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
