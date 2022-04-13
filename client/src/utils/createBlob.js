import * as blobs2 from "blobs/v2";

export const createBlob = (gameId) => {
  const blobPath = blobs2.svgPath({
    seed: gameId,
    extraPoints: 15,
    randomness: 15,
    size: 800,
  });

  const blobsplit = blobPath.split("C");
  const ys = blobsplit.map((el) => el.split(",")[5]).sort((a, b) => a - b);
  const xs = blobsplit.map((el) => el.split(",")[4]).sort((a, b) => a - b);
  const blobHeight = ys[ys.length - 2] - ys[0];
  const blobWidth = xs[xs.length - 2] - xs[0];
  const blobSize = blobWidth > blobHeight ? blobWidth / 2 : blobHeight / 2;

  return { blobPath, blobSize };
};
