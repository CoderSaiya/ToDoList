import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, {useState, useRef} from 'react'

import styles from './styles'

const Form = (prop) => {
    const [task, setTask] = useState('');
    const textInputRef = useRef(null);
    const handelAddTask = () => {
        if(task.length == 0){
            alert('Bạn chưa nhập task!')
            return false;
        }
        prop.onAddTask(task);
        setTask('');
        textInputRef.current.clear();
        Keyboard.dismiss();
    }

  return (
    <View style={styles.addTask}>
        <TextInput
        style={styles.input}
        ref={textInputRef}
        placeholder={'Please type here…'}
        onChangeText={(text) => setTask(text)}
        clearButtonMode="always"
        />
        <TouchableOpacity onPress={handelAddTask}> 
        <View style={styles.iconWrapper}>
            <Text style={styles.icon}> + </Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default Form