<template>
  <section>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="params.string"
          outlined
          rounded
          label="Busque por uma disciplina"
          hide-details
          clearable
          append-icon="mdi-arrow-right"
          @click:append="search()"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-slide-group show-arrows>
          <v-slide-item v-for="(filter, key) of filters" :key="key">
            <v-btn class="mx-2" outlined rounded small @click="openFilter(key)">
              {{ filter.title }}
            </v-btn>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <v-row v-if="dialog" justify="center">
      <v-dialog v-model="dialog" scrollable max-width="500px">
        <v-card>
          <v-card-title>{{ filters[dialogKey].title }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-checkbox
              v-for="option in filters[dialogKey].options"
              :key="option.value"
              v-model="params[dialogKey]"
              :value="option"
              :label="option.title"
              hideDetails
            >
            </v-checkbox>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Fechar
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Salvar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "SearchToolbar",
  data: () => ({
    filters: {
      departments: {
        title: "Departamentos",
        options: [
          {
            value: "ABC",
            title: "Departamento ABC",
          },
          {
            value: "CDEF",
            title: "Centro Decanato",
          },
        ],
      },
      credits: {
        title: "Créditos",
        options: [
          {
            value: "2",
            title: "2",
          },
          {
            value: "4",
            title: "4",
          },
        ],
      },
    },
    dialog: false,
    dialogKey: null,
    params: {
      string: "",
      departments: [],
      credits: [],
    },
  }),

  methods: {
    openFilter(key) {
      this.dialogKey = key;
      this.dialog = true;
    },
    search() {
      this.$emit("search", this.params);
    },
  },
};
</script>