<template>
  <v-app>
    <AppToolbar
      @toggle-drawer="$refs.appDrawer.drawer = !$refs.appDrawer.drawer"
    />
    <AppDrawer ref="appDrawer" />

    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" md="11" lg="9" xl="8">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppToolbar from "@/components/AppToolbar.vue";
import AppDrawer from "@/components/AppDrawer.vue";

export default {
  name: "App",
  components: {
    AppToolbar,
    AppDrawer,
  },
};
</script>
