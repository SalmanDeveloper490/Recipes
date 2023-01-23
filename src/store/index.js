import { createStore } from "vuex";
// import state from "./state";
// import * as actions from "./actions";
// import * as mutations from "./mutations";
// import * as getters from "./getters";

import mealsModule from "./modules/mealsModule";

// const store = createStore({
//   state,
//   actions,
//   mutations,
//   getters,
// });

// export default store;

// const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    meals: mealsModule,
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : [],
});
