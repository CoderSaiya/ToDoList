import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Task = (props) => {
  const {number} = props;
  const numberText = number < 10 ? `0${number}` : number;
  const styleType = number % 2 == 0 ? styles.even 
                                    : styles.odd;
  return (
    <View>
            <TouchableOpacity onPress={props.onDeleteTask}>
                <View style={styles.itemContainer}>
                    <View style={[styles.indexContainer, styleType]}>
                      <Text style={styles.indexText}>{numberText}</Text>
                    </View>
                    <View style={styles.itemTextContainer}>
                      <Text style={styles.itemText}>{props.title}</Text>
                    </View>
                </View>  
            </TouchableOpacity>
    </View>
  )
}

export default Task