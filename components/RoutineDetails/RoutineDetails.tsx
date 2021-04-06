import React from "react";
import { StyleSheet } from "react-native";

import { Routine as Props } from "../../types";
import ExerciseCard from "../ExerciseCard";
import { Text, View } from "../../components/Themed";

const RoutineCard: React.FC<Props> = ({ route, navigation }) => {
  const { name, exercises } = route.params;
  let totalVolume: number = 0;
  let totalTime: number = 0;
  exercises.forEach(({ weight, sets, reps, restTime }) => {
    totalVolume += weight * sets * reps;
    totalTime += restTime * sets + 4 * reps * sets;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      {exercises.map(({ id, exercise, sets, reps, weight, restTime }) => (
        <View key={id} style={styles.programmedContainer}>
          <ExerciseCard {...exercise} reps={reps} sets={sets} weight={weight} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 8,
  },
  programmedContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
});

export default RoutineCard;
