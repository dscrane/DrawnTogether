export const handleGridUpdate = (view, currentMultiplier) => {
  const { height, width, oldHeight, oldWidth } = view;
  let newMultiplier;
  if (oldHeight !== 0 || oldWidth !== 0) {
    newMultiplier = parseFloat((width / oldWidth).toFixed(4));
  } else {
    newMultiplier = currentMultiplier;
  }

  const yAxisCenter = parseFloat((height / 2).toFixed(4));
  const xAxisCenter = parseFloat((width / 2).toFixed(4));

  return {
    resizeRatio: newMultiplier,
    xAxisCenter,
    yAxisCenter,
  };
};
