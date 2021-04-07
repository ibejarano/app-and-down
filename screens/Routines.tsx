import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import RoutineCard from "../components/RoutineCard";
import RoutineDetails from "../components/RoutineDetails";
import ExerciseDetails from './ExerciseDetails'
import { View, Text, Button } from "../components/Themed";
import { mock_routines } from "../constants/MockData";

function RoutineCardPress({ navigation, extraData }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("RoutineDetails", {
          ...extraData,
        })
      }
    >
      <RoutineCard {...extraData} />
    </TouchableOpacity>
  );
}

const Stack = createStackNavigator();

export default function RoutinesScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home">
        {(props) => (
          <>
            {mock_routines.map((routine) => (
              <RoutineCardPress {...props} extraData={routine} />
            ))}
          </>
        )}
      </Stack.Screen>
      <Stack.Screen name="RoutineDetails" component={RoutineDetails} />
      <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
