const { RESTDataSource } = require("apollo-datasource-rest");

class ChuckNorrisAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes/";
  }

  categoryReducer(categories) {
    let arrayOfCategories = [];
    categories.forEach((category) => {
      arrayOfCategories.push({
        name: category,
      });
    });

    return arrayOfCategories;
  }

  async getCategories() {
    const allCategories = await this.get("categories");

    return this.categoryReducer(allCategories);
  }

  async getJokeByCategory({ category }) {
    return this.get(`random?category=${category}`);
  }
}

module.exports = ChuckNorrisAPI;
