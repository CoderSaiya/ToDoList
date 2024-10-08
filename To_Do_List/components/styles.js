import {StyleSheet} from 'react-native'
import color from '../contains/color';

const styles =  StyleSheet.create({
      itemContainer: {
        flexDirection : 'row',
        backgroundColor : 'cyan',
        paddingVertical : 10,
        paddingHorizontal : 20,
        marginBottom : 20,
        borderRadius : 10,
        alignItems: 'center',
        justifyContent : 'space-between',
      },
    
      indexContainer: {
        width : 48,
        height : 36,
        borderRadius : 13,
        alignItems : 'center',
        justifyContent : 'center',
      },

      odd: {
        backgroundColor: color.oddTask
      },

      even: {
        backgroundColor: color.evenTask,
      },
    
      indexText: {
        fontWeight : '700',
        color : '#fff',
        fontSize : 18,
      },
    
      
      itemTextContainer: {
        width : '80%',
      },
    
      itemText: {
        fontSize: 18,
        fontWeight: 'bold',
    
      }
})

export default styles;