const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const ChuckNorrisAPI = require('./datasources');

const dataSources = () => ({
  ChuckNorrisAPI: new ChuckNorrisAPI()
})


const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`server started at ${url}`);
});
