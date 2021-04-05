import * as React from "react";
import { StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RoutineCard from "../components/RoutineCard";
import { View, Text } from "../components/Themed";
import { mock_routine } from "../constants/MockData";

function DetailScreenExercise() {
  return (
    <View>
      <Text>Aca el ejercicio!</Text>
    </View>
  );
}

export default function RoutinesScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <RoutineCard {...mock_routine} />

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
