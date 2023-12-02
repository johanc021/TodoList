import { View, Text, Modal, StyleSheet, Button } from "react-native";
import React from "react";

const CustomModal = ({
  animationTypeProp,
  isVisibleProp,
  itemSelectedProp,
  onDeleteItemHandlerEvent,
  setModalVisibleEvent,
}) => {
  return (
    <Modal animationType={animationTypeProp} visible={isVisibleProp}>
      <View style={styles.MessageContainer}>
        <Text>Se eliminara:</Text>
        <Text>{itemSelectedProp.value}</Text>
      </View>
      <View style={styles.modalButtonContainer}>
        <Button
          title="Cancelar"
          color="#ccc"
          onPress={() => setModalVisibleEvent(false)}
        />
        <Button
          title="Eliminar"
          color="red"
          onPress={onDeleteItemHandlerEvent}
        />
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  MessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
