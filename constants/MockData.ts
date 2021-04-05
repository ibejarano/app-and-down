import { Exercise, Body } from "../types";

const mock_exercises: Exercise[] = [
  {
    name: "Barbell Squat",
    body_train: [Body.FRONTLEG, Body.BACKLEG],
  },
  {
    name: "Military Press",
    body_train: [Body.SHOULDERS, Body.BACK],
  },
  {
    name: "EZ Bar Curl",
    body_train: [Body.BICEPS],
  },
  {
    name: "Deadlift",
    body_train: [Body.BACKLEG],
  },
];

export { mock_exercises };