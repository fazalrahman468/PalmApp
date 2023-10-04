import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';


export const style = StyleSheet.create({
  container: {backgroundColor: Colors.primary, flex: 1},
  box:{
    backgroundColor: Colors.white,
    padding: 16,
    margin: 16,
    borderRadius: 16
  },
  cell:{
    justifyContent: "center",
    alignItems: "center",
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
  conView:{
    height: 48,
    marginTop: 16
  },
  underlineStyleBase: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.primary,
    backgroundColor: Colors.grey,
  },
  buttonView:{
    marginTop: "25%"
  }
  

  

});
