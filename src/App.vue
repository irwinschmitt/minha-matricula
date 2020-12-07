<template>
  <v-app>
    <AppToolbar @toggle-drawer="toggleDrawer" />
    <router-view />
  </v-app>
</template>

<script>
import AppToolbar from "@/components/AppToolbar.vue";

export default {
  name: "App",
  components: {
    AppToolbar,
  },
  methods: {
    toggleDrawer() {
      console.log("toggle drawer");
    },
  },
};
</script>
