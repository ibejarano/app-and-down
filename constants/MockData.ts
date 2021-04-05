import { Exercise, Body } from "../types";

const mock_exercises: Exercise[] = [
  {
    id: 1,
    name: "Barbell Squat",
    body_train: [Body.FRONTLEG, Body.BACKLEG],
  },
  {
    id: 2,
    name: "Military Press",
    body_train: [Body.SHOULDERS, Body.BACK],
  },
  {
    id: 3,
    name: "EZ Bar Curl",
    body_train: [Body.BICEPS],
  },
  {
    id: 4,
    name: "Deadlift",
    body_train: [Body.BACKLEG],
  },
  {
    id: 5,
    name: "Barbell Row",
    body_train: [Body.CHEST, Body.BACK],
  },
  {
    id: 6,
    name: "Bench Press",
    body_train: [Body.CHEST],
  },
];

export { mock_exercises };
