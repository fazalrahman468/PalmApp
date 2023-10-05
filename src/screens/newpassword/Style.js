import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

export const style = StyleSheet.create({
    container:{
        backgroundColor: Colors.primary,
        flex: 1
    },
    box:{
      backgroundColor: Colors.white,
      padding: 16,
      margin: 16,
      borderRadius: 16
    },
    password:{
      backgroundColor: Colors.strokeWhite, 
      borderRadius: 12, 
      flexDirection: "row", 
      alignItems: "center",
      marginTop: 16,
      borderWidth: 1,
      borderColor: Colors.primary,
      
    },
    confirm:{
      backgroundColor: Colors.strokeWhite, 
      borderRadius: 12, 
      marginTop: 16,
      paddingLeft:12
    },
    buttonView:{
      marginTop: "5%"
    }
});