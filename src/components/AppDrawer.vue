<template>
  <section id="app-drawer">
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      width="300"
    />
  </section>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
};
</script>
