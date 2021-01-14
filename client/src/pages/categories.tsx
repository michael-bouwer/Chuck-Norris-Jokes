import { FC, ReactElement, useContext } from "react";
import { AppContext } from "../App";
import { gql, useQuery } from "@apollo/client";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Loading } from "../assets/svg/loading.svg";

const GET_CATEGORIES = gql`
  query GetCategories {
    categories
  }
`;

const slideIn = keyframes`
    0% {
        transform: translateY(+10%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const ContainerContent = styled.div`
  animation: ${slideIn} 0.35s ease-out;
`;

const Heading = styled.h3`
  margin: 15px;
  text-align: left;
  font-weight: 500;
  color: #5d5a45;
`;

const Button = styled.div`
  margin: 8px 0;
  padding: 12px 20px;
  color: #5d5a45;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  background-color: #fbab7e;
  background-image: linear-gradient(315deg, #fbab7e 0%, #f7ce68 100%);
  background-color: white;
  transition: 0.25s all ease;
  text-decoration: none;
  transition: all 200ms ease-in-out;

  &:hover {
    color: black;
    background-color: #fbab7e;
    background-image: linear-gradient(315deg, #fbab7e 0%, #f7ce68 100%);

    position: relative;
    &:before {
      z-index: -1;
      position: absolute;
      content: "";
      bottom: 13px;
      right: 7px;
      width: 75%;
      top: 0;
      box-shadow: 0 15px 10px #777;
      transform: rotate(4deg);
      transition: all 150ms ease-in-out;
    }
  }

  &:active {
    background-color: gainsboro;
  }
`;

const Categories: FC = (): ReactElement => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  return (
    <Container>
      <Heading>Categories</Heading>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <Loading />
      ) : data ? (
        <ContainerContent>
          <Row className="m-0">
            {data.categories.map((category: string) => {
              return (
                <CategoryButton key={category} name={category}>
                  {category}
                </CategoryButton>
              );
            })}
          </Row>
        </ContainerContent>
      ) : (
        <p>no data</p>
      )}
    </Container>
  );
};

interface CategoryButtonProps {
  name: string;
}

const CategoryButton: FC<CategoryButtonProps> = ({ name }) => {
  const { setCategory } = useContext(AppContext);
  return (
    <Col xs={12} sm={6} md={3}>
      <Link to="/randomjoke">
        <Button
          onClick={() => {
            setCategory(name);
          }}
        >
          {name}
        </Button>
      </Link>
    </Col>
  );
};

export default Categories;
