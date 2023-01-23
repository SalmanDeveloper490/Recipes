<template>
  <div class="my-5">
    <!-- <pre>{{ mealDetails }}</pre> -->
    <div class="row">
      <div class="col-md-12">
        <img
          :src="mealDetails?.strMealThumb"
          :alt="mealDetails?.strMeal"
          class="w-full"
        />
        <h1 class="my-3 text-uppercase">{{ mealDetails?.strMeal }}</h1>
        <div class="d-flex align-items-center gap-3">
          <button type="button" class="btn btn-primary">
            Area
            <span class="badge text-bg-warning">{{
              mealDetails?.strArea
            }}</span>
          </button>
          <button type="button" class="btn btn-primary">
            Category
            <span class="badge text-bg-warning">{{
              mealDetails?.strCategory
            }}</span>
          </button>
          <button type="button" class="btn btn-primary">
            Tags
            <span class="badge text-bg-warning">{{ mealDetails.strTags }}</span>
          </button>
        </div>
        <div class="mt-3">
          {{ mealDetails?.strInstructions }}
        </div>
        <div class="mt-3 d-flex gap-3 flexWrapper">
          <div>
            <h3 class="text-uppercase">Ingredients:</h3>
            <ul class="list-group mt-3">
              <template v-for="(element, index) of new Array(20)">
                <li
                  class="list-group-item"
                  v-if="mealDetails[`strIngredient${index + 1}`]"
                >
                  {{ mealDetails[`strIngredient${index + 1}`] }}
                </li>
              </template>
            </ul>
          </div>
          <div>
            <h3 class="text-uppercase">Measures:</h3>
            <ul class="list-group mt-3">
              <template v-for="(element, index) of new Array(20)">
                <li
                  class="list-group-item"
                  v-if="mealDetails[`strMeasure${index + 1}`]"
                >
                  {{ mealDetails[`strMeasure${index + 1}`] }}
                </li>
              </template>
            </ul>
          </div>
        </div>
        <div class="mt-5">
          <YoutubeButton :href="mealDetails.strYoutube">
            Go To Youtube
          </YoutubeButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

export default {
  data() {
    return {
      mealDetails: [],
    };
  },
  async mounted() {
    const route = useRoute();
    const { data } = await axiosClient.get(`lookup.php?i=${route.params.id}`);
    console.log(data);
    this.mealDetails = data.meals[0] || {};
  },
  components: { YoutubeButton },
};
</script>
