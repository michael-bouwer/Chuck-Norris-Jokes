import React, { FC, ReactElement } from "react";

type NavbarProps = {
    title?: string,    
}

const Navbar: FC<NavbarProps> = ({ title }): ReactElement => {
  return (
    <div>
      <p>Nav</p>
    </div>
  );
};

export default Navbar;
