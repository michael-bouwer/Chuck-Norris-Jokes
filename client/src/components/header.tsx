import React, { FC, ReactElement } from "react";

type HeaderProps = {
    title?: string,    
}

const Header: FC<HeaderProps> = ({ title }): ReactElement => {
  return (
    <div>
      <p>Nav</p>
    </div>
  );
};

export default Header;
