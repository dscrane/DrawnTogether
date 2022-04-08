export const responseSchema = {
  name: "",
  association: "",
  height: "",
  curiosity: "",
  productivity: "",
  age: "",
  diet: "",
  leaning: "",
  personality: "",
  hair: "",
  money: "",
  food: "",
  nature: "",
  media: "",
  progress: "",
  religion: "",
  culture: "",
  color: "",
};





const getValue = (vals) => {
  return vals[Math.floor(Math.random() * vals.length)];
};
const names = [    "Gonzales",
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
  "Mack",]
const heightVals = [16, 32, 48];
const curiosityVals = [27, 36, 18, 9, 0];
const hairVals = [ 2, 1, 0 ];
// const productivityVals = [2, 1];
const ageVals = [400, 40, 360, 80, 320, 120, 280, 160, 240, 200];
const dietVals = ["omnivore", "vegetarian", "pescatarian", "vegan"];
const leaningVals = [18, 45];
const personalityVals = [60, 31, 18];
const productivityVals = [2, -1]
/*const hairVals = [10, 18, 25, -15];*/
const moneyVals = [0, 1, 2, 3];
const foodVals = [45, 135, 45, 270];
const natureVals = ["hollow", "stroke", "ring", "dot"];
const mediaVals = ["thinner", "thicker", "thin", "thick"];
const progressVals = ["complimentary", "triadic", "monochromatic", "analogous"];
const religionVals = ["solid", "round", "dotted", "uneven", "dashed"];
const cultureVals = [0, 1, 2, 3];
const colorVals = ["chartreuse", "vermilion", "cobalt", "teal", "kellyGreen", "aubergine"];

export const createResponseSchema = () =>
  !process.env.REACT_APP_AUTOFILL
    ? responseSchema
    : {
        name: getValue(names),
        association: Math.floor(Math.random() * 100),
        height: getValue(heightVals),
        curiosity: getValue(curiosityVals),
        hair: getValue(hairVals),
        age: getValue(ageVals),
        diet: getValue(dietVals),
        personality: getValue(personalityVals),
        leaning: getValue(leaningVals),
        productivity: getValue(productivityVals),
        money: getValue(moneyVals),
        food: getValue(foodVals),
        nature: getValue(natureVals),
        media: getValue(mediaVals),
        progress: getValue(progressVals),
        religion: getValue(religionVals),
        culture: getValue(cultureVals),
        color: getValue(colorVals),
      };
