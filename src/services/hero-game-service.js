import instance from "./axios";

// Return the id to start the game, which acts as unique connection in all other api request.
export async function startGame() {
  const { data } = await instance.get("/start");
  return data;
}

// Returns the blocks and player initial state as well as the next player to be playing
export async function gamePlayers(id, numberOfPlayers) {
  const { data } = await instance.post("/players", {
    id,
    numberOfPlayers,
  });
  return data;
}

// This is the player move and then the result of game, based on the block next player move is decided
// as well as this can automatically modifies other player states.
export async function nextPlayer(id, player, numberOfDice) {
  const { data } = await instance.post("/next", {
    id,
    player,
    numberOfDice,
  });
  return data;
}
