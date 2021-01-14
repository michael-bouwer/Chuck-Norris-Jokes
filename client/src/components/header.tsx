import { FC, ReactElement } from "react";
import styled from "styled-components";

type HeaderProps = {
    title?: string,    
}

const Container = styled.div`
  height: 20vh;
  max-height: 200px;
  background-color: red;
`;

const Header: FC<HeaderProps> = ({ title }): ReactElement => {
  return (
    <Container>
      <p>Chuck Norris Jokes</p>
    </Container>
  );
};

export default Header;
