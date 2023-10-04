import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

export const style = StyleSheet.create({
    container:{
        backgroundColor: Colors.primary,
        flex: 1
    },
    code:{
        fontFamily: 'Inter-SemiBold',
        fontSize: 20,
        color: Colors.black1,
        marginTop: 16
      },
      enter:{
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color : Colors.black1
      },
      num:{
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color : Colors.primary
      },
});