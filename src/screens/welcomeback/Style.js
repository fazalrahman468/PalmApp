import {StyleSheet} from 'react-native'
import Colors from '../../assets/colors/Colors'

export const style = StyleSheet.create({
    container:{ backgroundColor: Colors.primary, flex: 1},
    welcomeView:{
        marginTop: 36,
        justifyContent: "center",
        alignItems: "center"
    },
    welcome:{
        fontFamily: 'Inter-Medium',
        fontSize: 20,
        color: Colors.white
    },
    box:{
        backgroundColor: Colors.white,
        padding: 16,
        marginHorizontal: 16,
        marginTop: 24,
        borderRadius: 16
      },
      confirm:{
        backgroundColor: Colors.strokeWhite, 
        borderRadius: 12, 
        paddingLeft: 12
      },

      password:{
        backgroundColor: Colors.strokeWhite, 
        borderRadius: 12, 
        flexDirection: "row", 
        alignItems: "center",
        marginTop: 16,
        paddingLeft: 12
        
      },
      buttonView:{
        marginTop: "5%",
        // backgroundColor: Colors.black
      },
      phone:{
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: Colors.black,
        marginTop: 16,
        textAlign: "center"
      },
      forgot:{
        fontFamily: 'Inter-Medium',
        fontSize: 14,
        color: Colors.white,
        textAlign: "center",
        marginTop: 24
      }
})