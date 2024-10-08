import {StyleSheet} from 'react-native'

import color from '../../contains/color'

const styles =  StyleSheet.create({
    addTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
    },

    input: {
        height: 44,
        width: '85%',
        backgroundColor: '#fff',
        borderColor: color.border,
        borderRadius: 15,
        borderWidth: 3,
        paddingLeft: 10,
    },

    iconWrapper: {
        width: 44,
        height: 44,
        backgroundColor: '#528B8B',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: color.border,
    },

    icon: {
        fontSize: 24,
        color: color.background,
    }

});

export default styles;