import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import ExerciseCard from "../components/ExerciseCard";
import { mock_exercises } from "../constants/MockData";

export default function ExerciseDetails({ navigation, route }) {
  const { exercise, sets, reps, weight, restTime } = route.params;
  return (
    <View style={styles.container}>
      <Text>{exercise.name}</Text>
      <Text>{weight} kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
