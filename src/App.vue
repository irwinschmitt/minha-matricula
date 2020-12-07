<template>
  <v-app>
    <AppToolbar
      @toggle-drawer="$refs.appDrawer.drawer = !$refs.appDrawer.drawer"
    />
    <AppDrawer ref="appDrawer" />
    <router-view />
  </v-app>
</template>

<script>
import AppToolbar from "@/components/AppToolbar.vue";
import AppDrawer from "@/components/AppDrawer.vue";

export default {
  name: "App",
  components: {
    AppToolbar,
    AppDrawer,
  },
};
</script>
