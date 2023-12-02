import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeTexthandler = (text) => {
    setTextItem(text);
  }

  const addToList = () => {
    setItemList(prevState => [...prevState, { id: Math.random().toString(), value: textItem }]);
    setTextItem("");
  }

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemSelectedToDelete(itemList.find(item => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setItemList(prevItems => prevItems.filter(item => item.id !== itemSelectedToDelete.id));
    setModalVisible(false); // Close the modal after deleting the item
  }

  const renderListItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.value}</Text>
      <Button title='x' onPress={() => onSelectItemHandler(item.id)} />
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Ingresar tarea" onChangeText={onChangeTexthandler} value={textItem} />
        <Button title='Add' color="#841584" onPress={addToList} />
      </View>
      <FlatList
        data={itemList}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
      />
      <Modal animationType='slide' visible={modalVisible}>
        <View style={styles.MessageContainer}>
          <Text>Se eliminara:</Text>
          <Text>{itemSelectedToDelete.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button title='Cancelar' color='#ccc' onPress={() => setModalVisible(false)} />
          <Button title='Eliminar' color='red' onPress={() => {
            onDeleteItemHandler()
          }} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  textInput: {
    width: 200,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: "#a2d2ff",
    borderRadius: 10
  },
  MessageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }
});
