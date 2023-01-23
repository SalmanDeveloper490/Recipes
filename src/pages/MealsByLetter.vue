<template>
  <div class="my-5">
    <div class="text-center mb-5">
      <!-- <pre>{{ letters.split("") }}</pre> -->
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters.split('')"
        :key="letter"
        class="letters"
      >
        {{ letter }}
      </router-link>
    </div>
    <div class="row">
      <MealCard :meals="mealsByLetter" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import { useRoute } from "vue-router";
import MealCard from "../components/MealCard.vue";

// const route = useRoute();

export default {
  data() {
    return {
      letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    };
  },
  computed: mapState({
    mealsByLetter: (state) => state.meals.mealsByLetter,
  }),
  watch: {
    $route(to, from) {
      this.$store.dispatch(
        "meals/searchMealsByLetter",
        this.$route.params.letter
      );
    },
  },
  // mounted() {
  //   const route = useRoute();
  //   this.letters = route.params.letter;
  //   console.log(this.letters);
  //   this.searchMealsByLetter();
  // },
  // methods: {
  //   searchMealsByLetter() {
  //     this.$store.dispatch("searchMeals/searchMealsByLetter", this.letters);
  //   },
  // },
  components: { MealCard },
};
</script>
