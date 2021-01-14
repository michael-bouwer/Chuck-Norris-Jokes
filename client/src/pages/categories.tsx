import { FC, ReactElement, useContext } from "react";
import { AppContext } from "../App";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GET_CATEGORIES = gql`
  query GetCategories {
    categories
  }
`;

const Container = styled.div``;

const Button = styled.div`
  display: inline-block;
  margin: 4px 4px;
  padding: 6px 20px;
  color: black;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  width: 100px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #fda085;

  &:hover {
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Categories: FC = (): ReactElement => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  return (
    <div>
      <p>Catgories</p>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>loading...</p>
      ) : data ? (
        <Container>
          {data.categories.map((category: string) => {
            return (
              <CategoryButton key={category} name={category}>
                {category}
              </CategoryButton>
            );
          })}
        </Container>
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};

interface CategoryButtonProps {
  name: string;
}

const CategoryButton: FC<CategoryButtonProps> = ({ name }) => {
  const { setCategory } = useContext(AppContext);
  return (
    <Link to="/randomjoke">
      <Button
        onClick={() => {
          setCategory(name);
        }}
      >
        {name}
      </Button>
    </Link>
  );
};

export default Categories;