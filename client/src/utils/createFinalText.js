import React from "react";

export const createFinalText = (interest, players) => {
  if (!Object.keys(players)) {
    return;
  }
  const finalTexts = [];
  const playerNames = Object.values(players).map((el) => el.responses.name);
  const longestName = playerNames.sort((a, b) => a.length - b.length).pop();
  const positionSetterText = longestName.length > interest.length ? longestName : interest;
  const textPosition = (positionSetterText.length * 8) / 2 + 50;

  for (let player in players) {
    finalTexts.push(
      <text key={`final_${players[player]._id}`} x={textPosition} y={50 + 25 * (parseInt(player) + 1)}>
        {players[player].responses.name}
      </text>
    );
  }
  finalTexts.unshift(
    <text key={"final_header"} className="svg__test-header" x={textPosition} y={50}>
      {interest.toUpperCase()}
    </text>
  );
  return (
    <g className="svg__text" textAnchor="middle">
      {finalTexts}
    </g>
  );
};
