import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';


export const style = StyleSheet.create({
  container: {backgroundColor: Colors.white, flex: 1},
  background:{flex: 1},
  image:{ 
  justifyContent: "center", 
  alignItems: "center",
  marginTop: "60%"
  },
  palmText:{
    marginTop: 10,
    fontSize: 16, 
    fontFamily: 'Inter-Medium',
    color: Colors.white,
    textAlign: "center",
    paddingHorizontal: 24,
    lineHeight: 24
  },
  buttonView:{
    marginTop: "50%",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginHorizontal: 18

  },
  already:{
    marginTop: 24,
    fontSize: 14,
    fontFamily: 'Inter-Medium'
  }

});
