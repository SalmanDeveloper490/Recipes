import axiosClient from "../../axiosClient";

// initial state
const state = () => ({
  randomMeals: [],
  meals: [],
  mealsByLetter: [],
});

// mutations
const mutations = {
  setRandomMeals(state, meals) {
    state.randomMeals = meals;
  },
  setSearchedMeals(state, meals) {
    state.meals = meals || [];
  },
  setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || [];
  },
  setMealsByIngrdient(state, meals) {
    state.mealsByIngredient = meals || [];
  },
};

// actions
const actions = {
  async getRandomMeals({ commit }) {
    try {
      const { data } = await axiosClient.get(`random.php`);
      // debugger;
      commit("setRandomMeals", data.meals);
    } catch (error) {
      console.log(error);
    }
  },
  async searchedMeals({ commit }, keyword) {
    try {
      const { data } = await axiosClient.get(`search.php?s=${keyword}`);
      // debugger;
      commit("setSearchedMeals", data.meals);
    } catch (error) {
      console.log(error);
    }
  },
  async searchMealsByLetter({ commit }, letter) {
    try {
      const { data } = await axiosClient.get(`search.php?f=${letter}`);
      // debugger;
      commit("setMealsByLetter", data.meals);
    } catch (error) {
      console.log(error);
    }
  },
};

// getters
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
