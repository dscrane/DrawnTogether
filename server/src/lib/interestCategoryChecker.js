import axios from "axios";

export const interestCategoryChecker = async (interest) => {
  const { data } = await axios.get(
    `https://api.uclassify.com/v1/uclassify/topics/classify?readkey=${process.env.TEXT_API_KEY}&text=${interest}`
  );
  const maxCategory = Object.values(data).indexOf(
    Math.max(...Object.values(data))
  );
  return Object.keys(data)[maxCategory];
};
