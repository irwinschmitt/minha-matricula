<template>
  <v-row>
    <v-col v-for="course in 10" :key="course" cols="12" sm="6" md="4" xl="3">
      <span>{{ course }}</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SearchList",
};
</script>
