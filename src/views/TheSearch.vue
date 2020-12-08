<template>
  <section id="home">
    <SearchToolbar @search="setParams"></SearchToolbar>
  </section>
</template>

<script>
import SearchToolbar from "@/components/SearchToolbar";
export default {
  name: "TheSearch",
  components: {
    SearchToolbar,
  },
  data: () => ({
    params: {},
  }),
  methods: {
    setParams(params) {
      this.params = params;
    },
  },
};
</script>