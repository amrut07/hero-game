<template>
  <v-container class="mt-16">
    <v-row justify="center">
      <select-players></select-players>
    </v-row>
  </v-container>
</template>

<script>
import SelectPlayers from "./SelectPlayers.vue";
export default {
  name: "start-game",
  components: {
    SelectPlayers,
  },
};
</script>
