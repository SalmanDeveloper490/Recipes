<template>
  <div class="col-md-3" v-for="meal of meals" :key="meal.idMeal">
    <div class="card my-2">
      <router-link :to="{ name: 'mealDetials', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          class="card-img-top"
          :alt="meal.strMeal"
        />
      </router-link>

      <div class="card-body">
        <h5 class="card-title">{{ meal.strMeal }}</h5>
        <p class="card-text">
          {{ truncateStr(meal.strInstructions, 200) }}
        </p>
        <YoutubeButton :href="meal.strYoutube" class="btn btn-danger px-5"
          >Go To Youtube</YoutubeButton
        >
      </div>
    </div>
  </div>
  <div v-if="!meals.length" class="mt-3">
    <div class="alert alert-warning text-uppercase" role="alert">
      There are no meals, search meals
    </div>
  </div>
</template>

<script>
import YoutubeButton from "./YoutubeButton.vue";

export default {
  props: {
    meals: Object,
  },
  methods: {
    truncateStr(str, num) {
      if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    },
  },
  components: { YoutubeButton },
};
</script>
