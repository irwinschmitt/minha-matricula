<template>
  <section id="app-toolbar">
    <v-app-bar app flat outlined>
      <v-app-bar-nav-icon>
        <v-img src="@/assets/logo.svg" width="50" to="/" />
      </v-app-bar-nav-icon>

      <v-spacer />

      <v-tabs right :value="getTab()">
        <v-tab to="/">Busca</v-tab>
        <v-tab to="/grade">Sugestão</v-tab>
      </v-tabs>

      <v-btn icon @click="$emit('toggle-drawer')">
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </v-app-bar>
  </section>
</template>

<script>
export default {
  name: "AppToolbar",
  methods: {
    getTab() {
      switch (this.$route.name) {
        case "Search":
          return "tab-1";
        case "Schedule":
          return "tab-2";
        case "Course":
          return "tab-1";
      }
    },
  },
};
</script>

<style scoped>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: white;
}
</style>