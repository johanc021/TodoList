import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CustomModal from './components/CustomModal.jsx';
import CustomInput from './components/CustomInput.jsx';
import CustomFlatList from './components/CustomFlatList.jsx';
import CustomButton from './components/CustomButton.jsx';


export default function App() {
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [taskOk, setTaskOk] = useState([])

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
      <Text styles={styles.listItemText}>{item.value}</Text>
      <View style={styles.listItemButtons}>
        <CustomButton
          title=""
          color="#e11d48"
          event={onSelectItemHandler}
          param={item.id}
        />
        <CustomButton
          title="-"
          color="#e11d48"
          event={onSelectItemHandler}
          param={item.id}
        />

      </View>

      {/* {<Button title='x' onPress={() => onSelectItemHandler(item.id)} />} */}
    </View>
  )

  return (
    <View style={styles.layout}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>To Do List</Text>
      </View>
      <CustomInput
        placeholderProp="Ingresa la tarea"
        textItemProp={textItem}
        onChangeTextHandlerEvent={onChangeTexthandler}
        addItemToListEvent={addToList}

      />
      <CustomFlatList
        data={itemList}
        renderItems={renderListItem}
        keyExtractor={item => item.id}
      />
      <CustomModal
        animationTypeProp={"slide"}
        isVisibleProp={modalVisible}
        itemSelectedProp={itemSelectedToDelete}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setModalVisibleEvent={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#1e293b',
    padding: 30,
  },
  title: {
    color: '#f8fafc',
    marginBottom: 20,
    fontSize: 26
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30
  },
  textInput: {
    width: 200,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    color: '#cccf'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: "#64748b",
    borderRadius: 10,
  },
  listItemText: {
    color: 'red',
  },
  listItemButtons: {
    flexDirection: 'row',
    marginLeft: 'auto',
    gap: 2
  },
});