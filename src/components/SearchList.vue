<template>
  <v-row>
    <v-col v-for="course in 10" :key="course" cols="12" sm="6" md="4" xl="3">
      <CourseCard saved />
    </v-col>
  </v-row>
</template>

<script>
import CourseCard from "@/components/CourseCard";

export default {
  name: "SearchList",
  components: {
    CourseCard,
  },
};
</script>
