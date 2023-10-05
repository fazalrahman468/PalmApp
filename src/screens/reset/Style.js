import {StyleSheet} from 'react-native'
import Colors from '../../assets/colors/Colors'

export const style = StyleSheet.create({
 container:{
    backgroundColor: Colors.primary,
    flex: 1
 },
 resetView:{
    marginTop: 32,
    paddingHorizontal: 16,
    columnGap: 12,

 },
 reset:{
    fontSize: 20,
    fontFamily: 'Inter-Medium',
    color: Colors.white,

 },
 email:{
    fontFamily: 'Inter-Regular',
    fontSize: 14,
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

 
 buttonView:{
   marginTop: "5%"
 },
 reco:{
   backgroundColor: Colors.blue,
   padding: 16
 },
 recoText:{
   fontSize: 14,
   fontFamily: 'Inter-Regular',
   color: Colors.black,
   textAlign: "center",
   lineHeight: 20,

 }, 
 recoMail:{
   fontSize: 14,
   fontFamily: 'Inter-Regular',
   color: Colors.primary,
 }
 
});