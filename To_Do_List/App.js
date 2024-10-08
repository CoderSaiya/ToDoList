import { Text, View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';

import Task from './components/index';
import styles from './App.componet.styles';
import Form from './components/Form/index'


export default function App() {
  const [taskList,setTaskList] = useState([]);

  const handelAddTask = (task) => {
    setTaskList([...taskList,task]);
  }

  const handelDeleteTask = (index) => {
    Alert.alert(
      'Xoa Task',
      'Ban co muon xoa task nay chu',
      [
        {
          text: 'Huy',
          onPress: () => console.log('Da huy thao tac'),
          style: 'cancel'
        },

        {
          text: 'Dong y',
          onPress: () => {
            const tmp = [...taskList];
            tmp.splice(index,1);
            setTaskList(tmp);
            console.log('Da xoa');
          },
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style = {styles.headerText}> Todo List </Text>
      </View>
      <View style={styles.body}>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index+1} onDeleteTask={() => handelDeleteTask(index)}/>
            })
          }
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <Form onAddTask={handelAddTask}/>
      </View>
    </View>
  );
};