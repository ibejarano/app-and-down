import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Routines from "../screens/Routines";
import Exercises from "../screens/Exercises";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Routines"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Routines"
        component={TabRoutineNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Exercises"
        component={TabExerciseNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabRoutineNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Routines"
        component={Routines}
        options={{ headerTitle: "Routines" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabExerciseNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Exercises"
        component={Exercises}
        options={{ headerTitle: "Exercises" }}
      />
    </TabTwoStack.Navigator>
  );
}
