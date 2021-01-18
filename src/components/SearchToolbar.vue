<template>
  <section id="search-toolbar">
    <v-form @submit="submitSearch">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-text-field
            v-model="params.saved.text"
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
          <span v-for="(filter, key) of filters" :key="key">
            <v-btn
              v-if="filter"
              class="mr-2"
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
    <!-- {{ params.new }}
    <br />
    {{ params.saved }} -->

    <v-dialog
      v-if="dialog.key"
      v-model="dialog.value"
      transition="scroll-y-transition"
      max-width="500"
      scrollable
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
            v-model="params.new[dialog.key]"
            :value="option.id"
            :label="option.title"
          >
            <template v-if="dialog.key === 'departments'" #label>
              <v-row align="center" no-gutters>
                <v-col cols="3" sm="2">
                  <span>
                    <v-chip outlined small>{{ option.id }}</v-chip>
                  </span>
                </v-col>
                <v-col class="mx-2">
                  <span>{{ option.title }}</span>
                </v-col>
              </v-row>
            </template>
          </v-checkbox>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            @click="
              saveSelected(false);
              handleDialog(null);
            "
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            text
            :disabled="dataNotChanged"
            @click="
              saveSelected(true);
              submitSearch();
              handleDialog(null);
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
      new: {
        text: null,
        credits: [],
        departments: [],
      },
      saved: {
        text: null,
        credits: [],
        departments: [],
      },
    },
    dialog: {
      value: false,
      key: null,
    },
  }),

  computed: {
    ...mapGetters({ filters: "Algolia/getFilters" }),
    dataNotChanged() {
      const newParam = this.params.new[this.dialog.key];
      const savedParam = this.params.saved[this.dialog.key];

      return (
        newParam.length === savedParam.length &&
        newParam.every((v, i) => v === savedParam[i])
      );
    },
  },

  created() {
    this.getFilters();
  },

  methods: {
    getFilters() {
      this.$store.dispatch("Algolia/getFilters");
    },
    handleDialog(key) {
      this.dialog.value = !!key;
      this.dialog.key = key;
    },
    saveSelected(shouldSave) {
      if (shouldSave) Object.assign(this.params.saved, this.params.new);
      else Object.assign(this.params.new, this.params.saved);
    },
    submitSearch() {
      console.log(this.params.saved);
      this.$store.dispatch("Algolia/searchCourses", this.params);
    },
  },
};
</script>
