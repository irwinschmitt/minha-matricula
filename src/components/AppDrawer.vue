<template>
  <section id="app-drawer">
    <v-navigation-drawer v-model="drawer" app right width="300">
    </v-navigation-drawer>
  </section>
</template>

<script>
export default {
  name: "AppDrawer",
  data: () => ({
    drawer: false,
  }),
};
</script>