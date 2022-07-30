<template>
  <!-- <v-alert
    border="start"
    color="teal-darken-4"
    density="compact"
    icon="mdi-clock-fast"
    title="About Game"
    variant="elevated"
  >
    The game is a classic board game where between 2 and 4 players play against
    each other. It consists of a “straight road” of playing fields which have to
    be traversed.<br />
    The goal is to pass the 30 th playing field as the first player to win the
    game.
  </v-alert> -->
  <start-game v-if="!playersCount" />
  <dice-game v-if="playersCount" />
</template>
<script>
import { mapState } from "vuex";
import StartGame from "./StartGame.vue";
import DiceGame from "./DiceGame.vue";
export default {
  name: "HeadTemplate",
  components: {
    StartGame,
    DiceGame,
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    playersCount: (state) => state.playersCount,
  }),
};
</script>
