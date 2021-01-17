<template>
  <v-hover v-slot="{ hover }">
    <v-card :elevation="hover ? 4 : 0" outlined rounded="lg">
      <v-app-bar color="transparent" dense flat>
        <v-toolbar-title class="text-body-2">Darcy Ribeiro</v-toolbar-title>

        <v-spacer />

        <v-toolbar-title class="text-body-2">4 créditos</v-toolbar-title>

        <v-spacer />

        <v-btn icon>
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </v-app-bar>

      <v-card-title class="text-h6 text-break pb-0">
        Métodos de Desenvolvimento de Software
      </v-card-title>
      <v-card-text class="text-subtitle-1"> Faculdade do Gama </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    saved: {
      required: false,
      type: Boolean,
    },
  },
  computed: {
    icon: function () {
      return `mdi-playlist-${this.saved ? "remove" : "plus"}`;
    },
  },
};
</script>
