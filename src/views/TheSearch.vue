<template>
  <section>
    <SearchToolbar />
    <SearchList />
  </section>
</template>

<script>
import SearchToolbar from "@/components/SearchToolbar";
import SearchList from "@/components/SearchList";

export default {
  name: "TheSearch",
  components: {
    SearchToolbar,
    SearchList,
  },
};
</script>
