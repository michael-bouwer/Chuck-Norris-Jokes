import { FC, ReactElement, useContext } from "react";
import { AppContext } from "../App";
import { gql, useQuery, NetworkStatus } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GET_RANDOM_JOKE = gql`
  query GetRandomJokeByCategory($category: String!) {
    randomJoke(category: $category) {
      categories
      created_at
      updated_at
      icon_url
      id
      url
      value
    }
  }
`;

const RandomJoke: FC = (): ReactElement => {
  const { category } = useContext(AppContext);
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_RANDOM_JOKE,
    {
      variables: { category: category },
      notifyOnNetworkStatusChange: true,
    }
  );
  if (data) console.log(data);
  return (
    <div>
      <span>
        <Link to="/">
          <button>back</button>
        </Link>
      </span>
      <p>Random Joke from {category}</p>
      <span>
        <button onClick={() => refetch()}>another</button>
      </span>
      <div>
        {loading || networkStatus === NetworkStatus.refetch ? (
          <p>loading...</p>
        ) : (
          <p>{data.randomJoke.value}</p>
        )}
      </div>
    </div>
  );
};

export default RandomJoke;
