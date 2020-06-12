import Vue from "vue";
import Router from "vue-router";
import Charts from "@/views/charts/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Charts",
      component: Charts
    }
  ]
});
