<template>
  <section id="search-toolbar">
    <v-row>
      <v-col cols="12">
        <v-form @submit="submitSearch">
          <v-text-field
            v-model="params.text"
            outlined
            rounded
            label="Busque por uma disciplina"
            hide-details
            clearable
            append-icon="mdi-arrow-right"
            @click:append="submitSearch"
          />
        </v-form>
      </v-col>
      <v-col>
        <v-btn
          v-for="(filter, key) of filters"
          :key="key"
          class="mx-2"
          outlined
          rounded
          small
          @click="openDialog(key)"
        >
          {{ filter.title }}
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog
      v-if="dialog.key"
      v-model="dialog.value"
    >
      <v-card>
        <v-card-title>
          {{ filters[dialog.key].title }}
        </v-card-title>
        <v-divider />
        <v-card-text>
          <v-checkbox
            v-for="option in filters[dialog.key].options"
            :key="option.value"
            :label="option.title"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchToolbar",
  data: () => ({
    params: {
      text: "",
      credits: "",
      departments: ""
    },
    dialog: {
      value: false,
      key: ""
    }
  }),
  computed: {
    ...mapGetters({ filters: "Algolia/getFilters" })
  },
  created() {
    this.getFilters();
  },

  methods: {
    getFilters() {
      this.$store.dispatch("Algolia/getFilters");
    },
    openDialog(key) {
      this.dialog.value = true;
      this.dialog.key = key;
    },
    submitSearch() {
      this.$store.dispatch("Algolia/searchCourses", this.params);
    }
  }
};
</script>

<style></style>
