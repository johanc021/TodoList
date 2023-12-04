import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "./CustomButton.jsx";

const RenderList = (props) => {
  const { item, taskOk, onSelectItemComplete, onSelectItemHandler } = props;

  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item.value}</Text>
      <View style={styles.listItemButtons}>
        <CustomButton
          title="check"
          taskOk={taskOk}
          icon={true}
          event={() => onSelectItemComplete(item.id)}
          param={item.id}
        />
        <CustomButton
          title="trash-o"
          icon={true}
          color="#e11d48"
          event={() => onSelectItemHandler(item.id)}
          param={item.id}
        />
      </View>
    </View>
  );
};

export default RenderList;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#64748b",
    borderRadius: 10,
  },
  listItemText: {
    color: "#f8fafc",
    fontSize: 18,
  },
  listItemButtons: {
    flexDirection: "row",
    marginLeft: "auto",
    gap: 2,
  },
});
