import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>MOVİES APP</a>
      </Link>
      <span>ONUR GÖKCEKOCA</span>
    </nav>
  );
}

export default Navbar;
