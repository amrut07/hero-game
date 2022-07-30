<template>
  <v-container v-if="!winner" class="fill-height ma-0 pa-0" fluid>
    <v-layout class="split">
      <v-container class="left">
        <v-card>
          <v-card-title class="text-h5">
            All Players:
            <v-chip size="x-large" color="secondary"
              >{{ nextPlayerTurn }}
            </v-chip>
          </v-card-title>
          <v-row dense>
            <v-col v-for="player in players" :key="player.name" cols="auto">
              <v-card class="ma-3" color="#385F73" theme="dark">
                <v-card-title class="text-h5">
                  {{ player.name }}
                </v-card-title>

                <v-card-actions>
                  <v-btn
                    :disabled="nextPlayer.name !== player.name"
                    variant="outlined"
                    @click="nextPlayerMove(player.name)"
                  >
                    Play
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col></v-row
          ><v-card class="ma-3" color="#952175" theme="dark">
            <v-card-title class="text-h5">
              {{ nextPlayer.name }} Statastics:
            </v-card-title>

            <v-card-subtitle
              >Last Action: {{ nextPlayer.lastGamingSituation }}<br />

              <v-chip class="mx-2">Field: {{ nextPlayer.field }}</v-chip
              ><v-chip> Previous field: {{ nextPlayer.previousField }} </v-chip
              ><br />
              <v-chip class="mx-2"
                >Joker: {{ nextPlayer.joker ? "Yes" : "No" }}</v-chip
              ><v-chip>
                Skip Next Round:
                {{ nextPlayer.skipNextRound ? "Yes" : "No" }}</v-chip
              >
            </v-card-subtitle>
          </v-card></v-card
        >
      </v-container>
      <v-container class="left">
        <v-card title="Game Progress" class="pa-5">
          <v-row justify="center">
            <v-col v-for="n in fields" :key="n" cols="auto">
              <v-card
                height="75"
                width="75"
                :class="[
                  'd-flex justify-center align-center bg-secondary',
                  `elevation-${n}`,
                ]"
              >
                <!-- <div>{{ n.fieldType }}</div>
                <br /> -->
                <div>{{ n.position }}{{ n.players }}</div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-layout>
  </v-container>
  <v-container v-else-if="winner">
    <v-row class="mt-16" justify="center">
      <h1>{{ winner.name }} is the winner of this game!!</h1>
      <v-btn size="large" color="secondary" @click="resetGame">
        Start Again</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "dice-game",
  computed: {
    ...mapState({
      players: (state) => state.heroGame.players,
      nextPlayer: (state) => state.heroGame.nextPlayer,
      fields: (state) => state.heroGame.fields,
      winner: (state) => state.winner,
    }),
    nextPlayerTurn() {
      return `${this.nextPlayer?.name} will play next` || "";
    },
  },
  methods: {
    ...mapActions({ nextMove: "fetchNextMove" }),
    ...mapMutations({
      resetHeroGame: "setPlayersCount",
      setGameId: "setId",
      setWinner: "setWinner",
    }),
    nextPlayerMove(player) {
      const dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      this.nextMove({ player, dice });
    },
    updatePlayersPosition(field) {
      // eslint-disable-next-line no-debugger
      debugger;
      const data =
        field?.players?.reduce((acc, curr) => ((acc += curr), "")) || "";
      console.log(data);
      return data;
    },
    resetGame() {
      this.resetHeroGame(0);
      this.setGameId("");
      this.setWinner(null);
    },
  },
};
</script>
<style>
.split {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.left {
  overflow-y: scroll;
}
.right {
  flex: 1;
  overflow-y: scroll;
}
</style>
