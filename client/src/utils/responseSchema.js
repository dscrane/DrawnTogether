export const responseSchema = {
  name: "",
  association: "",
  height: "",
  curiosity: "",
  hair: "",
  age: "",
  diet: "",
  personality: "",
  leaning: "",
  productivity: "",
  money: "",
  food: "",
  nature: "",
  media: "",
  progress: "",
  religion: "",
  culture: "",
  color: "",
};

const names = [
  "Gonzales",
  "Harrell",
  "Parker",
  "Owens",
  "Welch",
  "Russo",
  "May",
  "Walls",
  "Buchanan",
  "Donaldson",
  "Shah",
  "Martin",
  "Montgomery",
  "Simon",
  "Nichols",
  "Wood",
  "Novak",
  "Herrera",
  "Golden",
  "Bryant",
  "Small",
  "Huffman",
  "Dodson",
  "Acosta",
  "Peterson",
  "Joyce",
  "Moore",
  "Davenport",
  "Michael",
  "Mack",
];
const heightVals = ["1", "3", "2"];
const curiosityVals = ["144", "216", "288", "0", "72"];
const hairVals = ["8", "16", "24"];
const dietVals = ["0", "48", "72", "24"];
const leaningVals = ["18", "45"];
const personalityVals = ["60", "31", "18"];
const productivityVals = ["2", "-1"];
const moneyVals = ["0", "1", "2", "3"];
const foodVals = ["45", "135", "45", "270"];
const natureVals = ["hollow", "stroke", "ring", "dot"];
const mediaVals = ["thinner", "thicker", "thin", "thick"];
const progressVals = ["complimentary", "triadic", "monochromatic", "analogous"];
const religionVals = ["solid", "round", "dotted", "uneven", "dashed"];
const cultureVals = ["1", "2", "3", "4"];
const colorVals = ["chartreuse", "vermilion", "cobalt", "teal", "kellyGreen", "aubergine"];

export const createResponseSchema = () => {
  return responseSchema;
};

const getValue = (vals, q) => {
  const i = Math.floor(Math.random() * vals.length);
  return vals[i];
};

export const createMockResponseSchema = (numMocks) => {
  if (numMocks === 0) {
    return [];
  }
  const mocks = [];
  for (let i = numMocks; i <= 5; i++) {
    console.log("Mock", i, "data: ");
    mocks.push({
      mock: true,
      name: `Demo #${i}`,
      age: Math.floor(Math.random() * 100).toString(),
      height: getValue(heightVals, i),
      curiosity: getValue(curiosityVals, i),
      hair: getValue(hairVals, i),
      diet: getValue(dietVals, i),
      personality: getValue(personalityVals, i),
      leaning: getValue(leaningVals, i),
      productivity: getValue(productivityVals, i),
      money: getValue(moneyVals, i),
      food: getValue(foodVals, i),
      nature: getValue(natureVals, i),
      media: getValue(mediaVals, i),
      progress: getValue(progressVals, i),
      religion: getValue(religionVals, i),
      culture: getValue(cultureVals, i),
      color: getValue(colorVals, i),
    });
  }
  console.log(mocks);
  return mocks;
};
