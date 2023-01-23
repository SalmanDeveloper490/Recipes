<template>
  <div class="row my-5">
    <MealCard :meals="randomMeals" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import MealCard from "../components/MealCard.vue";

export default {
  computed: mapState({
    randomMeals: (state) => state.meals.randomMeals,
  }),
  mounted() {
    this.$store.dispatch("meals/getRandomMeals");
  },
  components: { MealCard },
};
</script>
