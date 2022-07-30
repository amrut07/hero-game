import { createStore } from "vuex";
import {
  startGame,
  gamePlayers,
  nextPlayer,
} from "@/services/hero-game-service";

const store = createStore({
  state() {
    return {
      heroGame: {
        fields: [],
        players: [],
        nextPlayer: {},
      },
      // noOfDice: 0,
      winner: null,
      id: "",
      playersCount: 0,
    };
  },
  mutations: {
    setId(state, payload) {
      state.id = payload;
    },
    updateHeroGame(state, payload) {
      state.heroGame = payload;
    },
    // setPlayers(state, payload) {
    //   state.players = payload;
    // },
    // setNextPlayer(state, payload) {
    //   state.nextPlayer = payload;
    // },
    // setFields(state, payload) {
    //   state.fields = payload;
    // },
    setWinner(state, payload) {
      state.winner = payload;
    },
    setPlayersCount(state, payload) {
      state.playersCount = payload;
    },
    // setNoOfDice(state, payload) {
    //   state.noOfDice = payload;
    // },
  },
  actions: {
    async fetchId({ commit }) {
      const id = await startGame();
      commit("setId", id);
    },
    async setGamePlayers({ commit, state }, noOfPlayers) {
      const data = await gamePlayers(state.id, noOfPlayers);
      if (data.id === state.id) {
        commit("setPlayersCount", noOfPlayers);
        const currPlayersPosition = [];
        for (let player in data.players) {
          currPlayersPosition.push(player.name);
        }
        data.fields[0]["players"] = currPlayersPosition;
        commit("updateHeroGame", data);
      }
    },
    async fetchNextMove({ commit, state }, nextMove) {
      const data = await nextPlayer(state.id, nextMove.player, nextMove.dice);
      if (data.id === state.id) {
        for (let player in state.heroGame.players) {
          // Removing previous position
          const prevPlayers = data.fields[player.previousField]["players"];
          const index = prevPlayers.indexOf(player.name);
          if (index > -1) {
            prevPlayers.splice(index, 1);
          }
          data.fields[player.previousField]["players"] = prevPlayers;

          // Updating new position
          let currPosition = data.fields[player.field]["players"];
          if (Array.isArray(currPosition)) {
            currPosition.push(player.field);
          }
          currPosition = [player.field];
          data.fields[player.field]["players"] = currPosition;
        }

        commit("setWinner", data.winner);
        commit("updateHeroGame", data);
      }
    },
  },
});

export default store;
