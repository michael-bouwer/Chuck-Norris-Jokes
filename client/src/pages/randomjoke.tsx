import { FC, ReactElement, useContext } from "react";
import { AppContext } from "../App";
import { gql, useQuery, NetworkStatus } from "@apollo/client";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Loading } from "../assets/svg/loading.svg";
import { ReactComponent as Refresh } from "../assets/svg/refresh.svg";
import { ReactComponent as GoBack } from "../assets/svg/back.svg";
import moment from "moment";

const GET_RANDOM_JOKE = gql`
  query GetRandomJokeByCategory($category: String!) {
    randomJoke(category: $category) {
      # categories
      # created_at
      # updated_at
      # icon_url
      # id
      # url
      value
    }
  }
`;

const Heading = styled.h3`
  margin: 15px;
  font-weight: 500;
  color: #5d5a45;
  display: flex;
  justify-content: space-between;
`;

const RefreshContainer = styled.span`
  padding: 0 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #fbab7e;
    background-image: linear-gradient(315deg, #fbab7e 0%, #f7ce68 100%);
  }
`;

const HeadingText = styled.p`
  position: relative;
  line-height: 1.2em;

  &:before {
    position: absolute;
    left: 0;
    top: 1.2em;
    height: 0;
    width: 30px;
    content: "";
    border-top: 4px solid #fbab7e;
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

const RandomJoke: FC = (): ReactElement => {
  const { category } = useContext(AppContext);
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_RANDOM_JOKE,
    {
      variables: { category: category },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "no-cache",
    }
  );
  return (
    <Container>
      <Heading>
        <Link to="/" style={{ display: "inherit" }}>
          <RefreshContainer>
            <GoBack />
          </RefreshContainer>
        </Link>
        <HeadingText>{category}</HeadingText>
        <RefreshContainer
          onClick={() => {
            return refetch();
          }}
        >
          <Refresh />
        </RefreshContainer>
      </Heading>
      <ContainerContent>
        {loading || networkStatus === NetworkStatus.refetch ? (
          <Loading />
        ) : (
          <>
            <Row
              className="m-4 d-flex"
              style={{
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Col xs={6}>{data.randomJoke.value}</Col>
            </Row>
            <Row
              className="m-4 d-flex"
              style={{
                justifyContent: "center",
              }}
            >
            </Row>
          </>
        )}
      </ContainerContent>
    </Container>
  );
};

export default RandomJoke;
