import { FC, ReactElement } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../assets/img/banner.jpg";

type HeaderProps = {
  title?: string;
};

const ContainerContent = styled.div`
  height: 20vh;
  max-height: 200px;
  border-radius: 0 0 50px 0;
`;

const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 20vh;
  max-height: 200px;
  background-color: lightgray;
  border-radius: 0 0 50px 0;
  background-image: url(${banner});
  background-size: 15%;
  opacity: 0.2;
`;

const Heading = styled.div`
  height: 20vh;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 800;
  z-index: 2;
  color: #5D5A45;
`;

const Header: FC<HeaderProps> = ({ title }): ReactElement => {
  return (
    <ContainerContent>
      <BackgroundImage />
      <Container>
        <Row className="m-0 justify-content-center">
          <Heading>
            <h1 style={{ fontWeight: "bold" }}>Chuck Norris Joke Randomizer</h1>
          </Heading>
        </Row>
      </Container>
    </ContainerContent>
  );
};

export default Header;
