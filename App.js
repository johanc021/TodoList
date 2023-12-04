import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import CustomModal from './components/CustomModal.jsx';
import CustomInput from './components/CustomInput.jsx';
import CustomFlatList from './components/CustomFlatList.jsx';
import CustomButton from './components/CustomButton.jsx';
import ToastManager from 'toastify-react-native';
import { showToastsInputList, showToastsTaskDeleted, showToastsTaskModified, showToastsTaskOk } from './assets/js/alerts.js';

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
    if (textItem.trim()) {
      setItemList(prevState => [...prevState, { id: Math.random().toString(), value: textItem }]);
      setTextItem("");
    } else {
      showToastsInputList();
    }
  };

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemSelectedToDelete(itemList.find(item => item.id === id))
  }

  const onSelectItemComplete = (id) => {
    setTaskOk((prevTaskOk) => {
      const isTaskCompleted = prevTaskOk.find((task) => task.id === id);
      const updatedTaskOk = isTaskCompleted
        ? (showToastsTaskModified(), prevTaskOk.filter((task) => task.id !== id))
        : (showToastsTaskOk(), [...prevTaskOk, itemList.find((item) => item.id === id)]);

      return updatedTaskOk;
    });
  };


  const onDeleteItemHandler = () => {
    setItemList(prevItems => prevItems.filter(item => item.id !== itemSelectedToDelete.id));
    setModalVisible(false);
    showToastsTaskDeleted()
  }

  const onEditItem = (id) => {

  }

  const renderListItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item.value}</Text>
      <View style={styles.listItemButtons}>
        <CustomButton
          title="check"
          taskOk={taskOk}
          icon={true}
          event={onSelectItemComplete}
          param={item.id}
        />
        <CustomButton
          title="trash-o"
          icon={true}
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
      <ToastManager />
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
    color: '#f8fafc',
    fontSize: 18
  },
  listItemButtons: {
    flexDirection: 'row',
    marginLeft: 'auto',
    gap: 2
  },
});