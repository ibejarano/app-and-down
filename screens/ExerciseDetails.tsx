import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function ExerciseDetails({ navigation, route }) {
  const { exercise, sets } = route.params;
  return (
    <View style={styles.container}>
      <Text>{exercise.name}</Text>
      <View>
        {sets.map(({ reps, weight, restTime }) => (
          <View>
            <Text>{reps}</Text>
            <Text>{weight}</Text>
            <Text>{restTime}</Text>
          </View>
        ))}
      </View>
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
