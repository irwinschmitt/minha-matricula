import Vue from "vue";
import VueRouter from "vue-router";
import TheSearch from "@/views/TheSearch.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search",
    component: TheSearch,
  },
  {
    path: "/grade",
    name: "Schedule",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/TheSchedule.vue"),
  },
  {
    path: "/disciplina/:id",
    name: "Course",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/TheCourse.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
