import { Button, StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CustomButton = ({ title, icon, color, event, param, taskOk = [] }) => {
  const handlePress = () => {
    if (param) {
      event(param);
    } else {
      event();
    }
  };

  const isCompleted = taskOk.find((task) => task.id === param);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.inputButton,
        {
          backgroundColor: pressed
            ? "#128c3c"
            : isCompleted
            ? "#128c3c"
            : color,
        },
      ]}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>
        {icon ? <FontAwesome name={title} size={17} /> : title}
      </Text>
    </Pressable>
  );
};

/* const CustomButton = ({ icon, title, color, event, param }) => {
  const handlePress = () => {
    if (param) {
      event(param);
    } else {
      event();
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.inputButton,
        { backgroundColor: pressed ? "#128c3c" : color },
      ]}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>
        {icon ? (
          <FontAwesome name={title} size={17} />
        ) : (
          title
        )}
      </Text>
    </Pressable>
  );
}; */

const styles = StyleSheet.create({
  button: {
    padding: 18,
  },
  inputButton: {
    backgroundColor: "#16a34a",
    width: 40,
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
  },
});

export default CustomButton;


