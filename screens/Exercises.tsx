import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import ExerciseCard from "../components/ExerciseCard";
import { mock_exercises } from "../constants/MockData";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {mock_exercises.map((data, idx) => (
        <ExerciseCard key={idx} {...data} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
