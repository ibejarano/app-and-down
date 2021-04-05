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
  CHEST= "CHEST",
  BICEPS = "BICEPS",
  TRICEPS = "TRICEPS",
  FRONTLEG = "FRONTLEG",
  BACKLEG = "BACKLEG",
  SHOULDERS = "SHOULDERS",
  BACK = "BACK"
}
export interface Exercise {
  name: string,
  body_train: Body[]
}