import {StyleSheet} from 'react-native'
import Colors from '../../assets/colors/Colors'

export const style =StyleSheet.create({
 container:{
    backgroundColor: Colors.primary,
    flex: 1,
 }, section:{
   flexDirection: "row", 
        marginTop: 24, 
        paddingHorizontal: 16,
        justifyContent: "space-between", alignItems: "center",
 },
 logo:{
   width: 36,
   height: 36, 
   borderRadius: 18, 
   borderWidth: 2,
   borderColor: Colors.white
 },
 mod:{
   position: "relative",
   top: -60,
   left: 110,
   // backgroundColor: Colors.black

 }
});