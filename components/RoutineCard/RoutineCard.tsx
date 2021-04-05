import React from "react";
import { StyleSheet } from "react-native";

import { Routine as Props } from "../../types";
import ExerciseCard from "../ExerciseCard";
import { Text, View } from "../../components/Themed";

const RoutineCard: React.FC<Props> = ({ name, exercises }) => {
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
