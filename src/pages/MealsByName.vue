<template>
  <div class="my-5">
    <input
      type="text"
      class="form-control p-3"
      placeholder="Search Meals"
      v-model="keyword"
      v-on:change="searchMeals"
    />
    <!-- <pre>{{ meals }}</pre> -->
    <div class="mt-3">
      <div class="row">
        <MealCard :meals="meals" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { useRoute } from "vue-router";
import MealCard from "../components/MealCard.vue";
// import store from "../store";

export default {
  data() {
    return {
      keyword: "",
    };
  },
  // setup() {
  //   const route = useRoute();
  //   this.keyword = route.params.name;
  //   console.log(this.keyword);
  // },
  computed: mapState({
    meals: (state) => state.meals.meals,
  }),
  mounted() {
    const route = useRoute();
    this.keyword = route.params.name;
    // console.log(this.keyword);
    if (this.keyword) {
      this.searchMeals();
    }
  },
  methods: {
    searchMeals() {
      this.$store.dispatch("meals/searchedMeals", this.keyword);
    },
  },
  components: { MealCard },
};
</script>

<style></style>
