<!--This view is intended to group all the Header component and Provide a functionality of 
showing Header Title, Header Menus and the Search and User Account option -->
<template>
  <v-app-bar class="px-10" color="purple" dark>
    <h1>
      <!-- <v-icon dark color="primary" v-bind="props">
        mdi-newspaper-variant
      </v-icon> -->
      Hero Game
    </h1>
    <v-divider class="mx-4" vertical></v-divider>
    <!-- <v-app-bar-title>
      <header-field :fields="headerFields" />
    </v-app-bar-title> -->

    <v-spacer></v-spacer>

    <v-divider class="mx-4" vertical></v-divider>
    <v-tooltip bottom>
      <template v-slot:activator="{ props }">
        <v-icon class="mr-4" dark v-bind="props"> mdi-magnify </v-icon>
      </template>
      <span>Search</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ props }">
        <span>
          <v-icon dark v-bind="props"> mdi-account </v-icon>
          <!-- <h3>Sign In</h3> -->
        </span>
      </template>
      <span>Sign In</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderMenu",
  components: {},
  data() {
    return {};
  },
};
</script>
