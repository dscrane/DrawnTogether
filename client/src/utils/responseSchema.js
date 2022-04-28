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

const getValue = (vals, i) => {
  return i ? vals[i] : vals[Math.floor(Math.random() * vals.length)];
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
const heightVals = [16, 32, 48];
const curiosityVals = [27, 36, 18, 9, 0];
const hairVals = [2, 1, 0];
const ageVals = [400, 40, 360, 80, 320, 120, 280, 160, 240, 200];
const dietVals = ["omnivore", "vegetarian", "pescatarian", "vegan"];
const leaningVals = [18, 45];
const personalityVals = [60, 31, 18];
const productivityVals = [2, -1];
const moneyVals = [0, 1, 2, 3];
const foodVals = [45, 135, 45, 270];
const natureVals = ["hollow", "stroke", "ring", "dot"];
const mediaVals = ["thinner", "thicker", "thin", "thick"];
const progressVals = ["complimentary", "triadic", "monochromatic", "analogous"];
const religionVals = ["solid", "round", "dotted", "uneven", "dashed"];
const cultureVals = [1, 2, 3, 4];
const colorVals = ["chartreuse", "vermilion", "cobalt", "teal", "kellyGreen", "aubergine"];

export const createResponseSchema = (i) =>
  !process.env.REACT_APP_AUTOFILL
    ? responseSchema
    : {
        name: getValue(names, i),
        association: Math.floor(Math.random() * 100).toString(),
        height: getValue(heightVals, i),
        curiosity: getValue(curiosityVals, i),
        hair: getValue(hairVals, i),
        age: getValue(ageVals, i),
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
      };
