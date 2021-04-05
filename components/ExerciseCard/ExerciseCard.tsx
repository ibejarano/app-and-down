import React, { ReactElement } from "react";
import { Exercise } from "../../types";
import { Text, View } from "../../components/Themed";

interface Props extends Exercise {
  reps?: number;
  sets?: number;
  restTime?: number;
}

const ExerciseCard: React.FC<Props> = ({ name, body_train }) => {
  return (
    <View>
      <Text>{name}</Text>
      {body_train.map((body, idx) => (
        <Text key={idx}>{body}</Text>
      ))}
    </View>
  );
};

export default ExerciseCard;
