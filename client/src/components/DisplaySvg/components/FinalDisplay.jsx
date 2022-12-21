import React from "react";
import { createFinalText } from "../../../utils";
import { FinalCircle } from "../../../lib/circles";
import { useSelector } from "react-redux";

export const FinalDisplay = ({ width, height }) => {
  const { _id, interest, players } = useSelector((state) => state.session);
  return (
    <>
      {createFinalText(interest, players)}
      <FinalCircle key={`final_circle`} gameId={_id} width={width} height={height} />
    </>
  );
};
