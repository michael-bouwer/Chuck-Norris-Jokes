const { RESTDataSource } = require("apollo-datasource-rest");

class ChuckNorrisAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes/";
  }
  
  async getCategories() {
    const allCategories = await this.get("categories");

    return allCategories;
  }

  async getJokeByCategory({ category }) {
    return this.get(`random?category=${category}`);
  }

  async getSearchResults({ searchText }) {
    const searchResults = await this.get(`search?query=${searchText}`);

    return searchResults;
  }
}

module.exports = ChuckNorrisAPI;
