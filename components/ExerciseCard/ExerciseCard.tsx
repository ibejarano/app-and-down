import React from "react";
import { StyleSheet } from "react-native";

import { Exercise } from "../../types";
import { Text, View } from "../../components/Themed";

interface Props extends Exercise {
  reps?: number;
  sets?: number;
  weight?: number;
  restTime?: number;
}

const ExerciseCard: React.FC<Props> = ({ name, body_train }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      {body_train && (
        <View style={styles.subcontainer}>
          {body_train.map((body, idx) => (
            <Text style={styles.bodyText} key={idx}>
              {body}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 12,
    margin: 6,
    width: "90%",
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  bodyText: {
    fontSize: 14,
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "#ddd",
  },
});

export default ExerciseCard;
