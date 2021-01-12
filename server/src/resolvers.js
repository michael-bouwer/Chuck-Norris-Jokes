const resolvers = {
  Query: {
    categories: async (_, __, { dataSources }) => {
      const allCategories = await dataSources.ChuckNorrisAPI.getCategories();

      return allCategories;
    },

    randomJoke: async (_, { category }, { dataSources }) => {
      return dataSources.ChuckNorrisAPI.getJokeByCategory({
        category: category,
      });
    },
  },
};

module.exports = resolvers;
