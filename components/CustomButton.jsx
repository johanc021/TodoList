import { Button, StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CustomButton = ({ title, color, event, param }) => {
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
        {title}
        <FontAwesome name="trash-o" />
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </Text>
    </Pressable>
  );
};

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


