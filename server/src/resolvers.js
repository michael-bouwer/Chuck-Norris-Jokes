const resolvers = {
  Query: {
    categories: async (_, __, { dataSources }) => {
      const allCategories = await dataSources.ChuckNorrisAPI.getCategories();

      return allCategories;
    },

    randomJoke: async (_, { category }, { dataSources }) => {
      return dataSources.ChuckNorrisAPI.getJokeByCategory({
        category,
      });
    },

    searchJoke: async (_, { searchText }, { dataSources }) => {
      return dataSources.ChuckNorrisAPI.getSearchResults({
        searchText,
      });
    },
  },
};

module.exports = resolvers;
