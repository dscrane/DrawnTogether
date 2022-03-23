export const handleGridUpdate = (view, currentMultiplier) => {
  const { height, width, oldHeight, oldWidth } = view;
  let newMultiplier;
  if (oldHeight !== 0 || oldWidth !== 0) {
    newMultiplier = parseFloat((width / oldWidth).toFixed(4));
  } else {
    newMultiplier = currentMultiplier;
  }

  console.log("multiplier", newMultiplier);
  const svgDim = height > width ? Math.round(height) : Math.round(width);
  const radius = height < width ? Math.round(height / 2) : Math.round(width / 2);
  const axis = parseFloat((radius * 1.1).toFixed(4));
  const cross = parseFloat((radius * 0.75).toFixed(4));
  const cy = parseFloat((height / 2).toFixed(4));
  const cx = parseFloat((width / 2).toFixed(4));
  const step = parseFloat((radius / 16).toFixed(4));

  return {
    resizeRatio: newMultiplier,
    grid: {
      svgDim,
      radius,
      axis,
      cross,
      cx,
      cy,
      step,
    },
  };
};
