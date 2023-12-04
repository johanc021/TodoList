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
    <Modal
      animationType={animationTypeProp}
      visible={isVisibleProp}
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Se eliminara:</Text>
          <Text style={styles.modalTextItem}>{itemSelectedProp.value}</Text>
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
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalText: {
    fontSize: 17,
    marginBottom: 4,
  },
  modalTextItem: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    gap: 10,
  },
});
