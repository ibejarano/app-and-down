import { Exercise, Body, ProgrammedExercise, Routine } from "../types";

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

const mock_routine: Routine = {
  id: 1,
  name: "Probando mi amor por ti",
  exercises: [
    {
      id: 1,
      exercise: mock_exercises[0],
      sets: 3,
      reps: 10,
      weight: 110,
      restTime: 180,
    },
    {
      id: 2,
      exercise: mock_exercises[3],
      sets: 5,
      reps: 12,
      weight: 60,
      restTime: 240,
    },
  ],
};

export { mock_exercises, mock_routine };
