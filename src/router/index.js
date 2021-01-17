import Vue from "vue";
import VueRouter from "vue-router";
import TheSearch from "@/views/TheSearch.vue";
import TheCourse from "@/views/TheCourse.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search",
    component: TheSearch,
  },
  {
    path: "/disciplina/:id",
    name: "Course",
    component: TheCourse,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
