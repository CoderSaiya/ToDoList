import {StyleSheet} from 'react-native'

import color from './contains/color'

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        alignItems: 'left',
        justifyContent: 'center',
      },
    
      header: {
        flex : 2,
        paddingTop : 50,
        paddingHorizontal : 20,
      },
    
      headerText: {
        fontSize : 25,
        fontWeight : 'bold',
        fontStyle : 'italic',
        color : '#54BCD9',
      },
    
      body: {
        flex : 30,
        paddingHorizontal : 20,
      },
    
      bottom: {
        flex: 3,
        justifyContent: 'center',
      },
    
      items: {
        marginTop : 25,
      }
});

export default styles