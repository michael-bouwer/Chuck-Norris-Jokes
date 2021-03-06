import { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import Header from "./components/header";
import Categories from "./pages/categories";
import RandomJoke from "./pages/randomjoke";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/",
  resolvers: {},
});

const actions = {
  SET_CATEGORY: "SET_CATEGORY",
};

const initialState = {
  category: "",
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case actions.SET_CATEGORY:
      return { ...state, category: action.value };

    default:
      return state;
  }
}

export const AppContext = createContext({
  category: "",
  setCategory: (value: any) => {},
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    category: state.category,
    setCategory: (value: string) => {
      dispatch({ type: actions.SET_CATEGORY, value: value });
    },
  };
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Router>
          <AppContext.Provider value={value}>
            <Route path="/" exact component={Categories} />
            <Route path="/randomjoke" component={RandomJoke} />
          </AppContext.Provider>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
