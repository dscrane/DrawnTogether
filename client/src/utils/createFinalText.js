import React from "react";

export const createFinalText = (session) => {
  if (!Object.keys(session.players)) {
    return;
  }
  const finalTexts = [];
  const playerNames = Object.values(session.players).map((el) => el.responses.name);
  const longestName = playerNames.sort((a, b) => a.length - b.length).pop();
  const positionSetterText = longestName.length > session.interest.length ? longestName : session.interest;
  const textPosition = (positionSetterText.length * 8) / 2 + 50;

  for (let player in session.players) {
    finalTexts.push(
      <text key={`final_${session.players[player]._id}`} x={textPosition} y={50 + 25 * (parseInt(player) + 1)}>
        {session.players[player].responses.name}
      </text>
    );
  }
  finalTexts.unshift(
    <text key={"final_header"} className="svg__test-header" x={textPosition} y={50}>
      {session.interest.toUpperCase()}
    </text>
  );
  return (
    <g className="svg__text" textAnchor="middle">
      {finalTexts}
    </g>
  );
};
