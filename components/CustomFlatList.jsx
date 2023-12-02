import { FlatList } from "react-native";
import React from "react";

const CustomFlatList = ({ data, renderItems, keyExtractor }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItems}
      keyExtractor={keyExtractor}
    />
  );
};

export default CustomFlatList;
