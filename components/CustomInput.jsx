import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "./CustomButton.jsx";

const CustomInput = ({
  placeholderProp,
  textItemProp,
  onChangeTextHandlerEvent,
  addItemToListEvent,
}) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholderProp}
          onChangeText={onChangeTextHandlerEvent}
          value={textItemProp}
          fontSize={18}
          height={40}
          width={280}
        />
        <CustomButton title="+" color="#10b981" event={addItemToListEvent} />
      </View>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 30,
    position: "absolute",
    bottom: 20,
    zIndex: 1,
    right: 15,
    left: 15,
  },
  textInput: {
    width: 200,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: "#e2e8f0",
    fontSize: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
});
