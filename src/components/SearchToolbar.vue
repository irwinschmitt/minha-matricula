<template>
  <section id="search-toolbar">
    <v-form @submit="submitSearch">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <v-text-field
            v-model="params.text"
            outlined
            rounded
            label="Busque por uma disciplina"
            append-outer-icon="mdi-arrow-right"
            hide-details
            clearable
            max="80"
            @click:append-outer="submitSearch()"
            @keydown.enter.prevent="submitSearch()"
          />
        </v-col>

        <v-col>
          <span
            v-for="(filter, key) of filters"
            :key="key"
          >
            <v-btn
              v-if="filter"
              class="mx-2"
              outlined
              rounded
              small
              @click="handleDialog(key)"
            >
              {{ filter.title }}
            </v-btn>
          </span>
        </v-col>
      </v-row>
    </v-form>

    <v-dialog
      v-if="dialog.key"
      v-model="dialog.value"
      transition="scroll-y-transition"
      max-width="500"
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
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="grey"
            text
            @click="handleDialog(false)"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="
              submitSearch();
              handleDialog(false);
            "
          >
            Salvar
          </v-btn>
        </v-card-actions>
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
      key: null
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
    handleDialog(key) {
      if (key) {
        this.dialog.value = true;
        this.dialog.key = key;
      } else {
        this.dialog.value = false;
        this.dialog.key = null;
      }
    },
    submitSearch() {
      console.log("SUBMITED");
      // this.$store.dispatch("Algolia/searchCourses", this.params);
    }
  }
};
</script>

<style></style>
