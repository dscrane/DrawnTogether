export const mockPlayers = () => {
  let players = [];
  for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
    players.push({
      name: `Tester ${Math.floor(Math.random() * 100)}`,
      association: Math.floor(Math.random() * 50),
    });
  }

  return players;
};
