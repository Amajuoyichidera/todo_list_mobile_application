import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react';
import { Feather, Foundation, AntDesign } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Todo = () => {
   const [name, setName] = useState('');
   const [todos, setTodos] = useState([]);
   const [myImage, setMyImage] = useState(true);
   const [completed, setCompleted] = useState(false)

  function addTodo() {
    setMyImage(false)

    if (name.trim() === '') {
      return;
    }

    const task = { id: Date.now().toString(), text: name, };
    setTodos((prevTasks) => [...prevTasks, task]);
    setName('');
  }

  function deleteTodo(id) {
    setTodos((prevTasks) => prevTasks.filter((task) => task.id !== id));
  } 
  

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome David</Text>
      {myImage ? <Image source={require('../assets/task.png')} style={{height: 250, width: 320, marginBottom: 20,}} /> : <Text style={styles.task}>TaskLists</Text>}
      
      <TextInput
      style={styles.input}
      placeholder="Add Todo"
      value={name}
      onChangeText={setName}
       />
      
      <Foundation onPress={addTodo} name="clipboard-pencil" size={50} color="#078EC7" style={{ marginTop: 20, marginBottom: 20}} />

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={ completed ? styles.complete : styles.item }>{item.text}</Text>
            <BouncyCheckbox
            fillColor="green"
            isChecked={completed}
            disableBuiltInState
            onPress={() => setCompleted(!completed)} />
            <Feather onPress={() => deleteTodo(item.id)} name="trash-2" size={24} color="red" />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Todo


const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDADA',
  },
  input: {
    width: '85%',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  myBtn: {
    backgroundColor: '#078EC7',
    padding: 20,
    width: 100,
    borderRadius: '100%',
    marginTop: 20,
},
delete : {
   backgroundColor: 'red',
   padding: 20,
   borderRadius: '100%',
},
myBtnText: {
  color: 'white',
  textAlign: 'center', 
  fontSize: 20,
  fontWeight: '400',
},
h1: {
fontSize: 25,
fontWeight: '700',
paddingBottom: 30,
paddingTop: 100
},
  task: {
    fontSize: 25,
    paddingTop: 20,
    fontWeight: '500',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    gap: 50,
    paddingTop: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  item: {
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'capitalize',
    textDecorationLine: 'none',
  },
   complete: {
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'capitalize',
    textDecorationLine: 'line-through',
  },
});