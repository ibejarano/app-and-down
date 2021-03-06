import React from "react";
import { StyleSheet } from "react-native";

import { Routine as Props } from "../../types";
import ExerciseCard from "../ExerciseCard";
import { Text, View } from "../../components/Themed";

const RoutineCard: React.FC<Props> = ({ name, exercises }) => {
  let totalVolume: number = 0;
  let totalTime: number = 0;
  exercises.forEach(({ weight, sets, reps, restTime }) => {
    totalVolume += weight * sets * reps;
    totalTime += restTime * sets + 4 * reps * sets;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      {/* {exercises.map(({ id, exercise, sets, reps, weight, restTime }) => (
        <View key={id} style={styles.programmedContainer}>
          <ExerciseCard {...exercise} reps={reps} sets={sets} weight={weight} />
        </View>
      ))} */}
      <View style={styles.infoContainer}>
        <Text>Total volume: {totalVolume}</Text>
        <Text>Estimated time: {totalTime / 60} mins</Text>
      </View>
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
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 8,
  },
});

export default RoutineCard;
