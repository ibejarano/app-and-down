export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Routines: undefined;
  Exercises: undefined;
};

export type TabOneParamList = {
  Routines: undefined;
};

export type TabTwoParamList = {
  Exercises: undefined;
};

export enum Body {
  CHEST = "CHEST",
  BICEPS = "BICEPS",
  TRICEPS = "TRICEPS",
  FRONTLEG = "FRONTLEG",
  BACKLEG = "BACKLEG",
  SHOULDERS = "SHOULDERS",
  BACK = "BACK",
}
export interface Exercise {
  id: number;
  name: string;
  body_train: Body[];
}

export interface ProgrammedExercise {
  id: number;
  exercise: Exercise;
  sets: number;
  reps: number;
  weight: number;
  restTime: number;
}
export interface Routine {
  id: number;
  name: string;
  exercises: ProgrammedExercise[];
}
