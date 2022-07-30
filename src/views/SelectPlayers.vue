<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="400" height="400">
      <template v-slot:activator="{ props }">
        <!-- <v-btn color="primary"> Select Players </v-btn> -->
        <v-btn
          v-bind="props"
          class="pa-16"
          flat
          size="x-large"
          color="secondary"
          icon="mdi-start"
          @click="onStartGame"
          >Start Game</v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5"> Select Players</span>
        </v-card-title>
        <v-card-text
          ><v-alert
            density="comfortable"
            type="info"
            variant="tonal"
            class="my-5"
          >
            You can play this game with min 2 Players or max 4 players.
          </v-alert>
          <v-spacer></v-spacer>
          <v-select
            :items="[2, 3, 4]"
            label="Select Players"
            required
            v-model="selectedPlayers"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="info"
            class="mx-2"
            :disabled="!players"
            text
            @click="onSubmit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    dialog: false,
    selectedPlayers: "",
  }),
  computed: {
    ...mapState({ gameId: (state) => state.id }),
    players() {
      return this.selectedPlayers && this.gameId;
    },
  },
  methods: {
    ...mapActions({ fetchId: "fetchId", setGamePlayers: "setGamePlayers" }),
    onStartGame() {
      this.fetchId();
    },
    onSubmit() {
      this.setGamePlayers(parseInt(this.selectedPlayers));
    },
  },
};
</script>
