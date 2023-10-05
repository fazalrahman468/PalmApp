import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../assets/colors/Colors';
import Google from '../assets/images/Google.svg';
import Apple from '../assets/images/Apple.svg';


 function Osios() {
  return (
    <View style={style.container}>
    <View style={style.google}>
     <Google/>
     <Text style={style.googleText}>Continue with Google</Text>
     </View>
     <View style={style.apple}>
     <Apple/>
     <Text style={style.appleText}>Continue with Apple</Text>
     </View>

    </View>
  );
}

const style = StyleSheet.create ({
 container:{
    backgroundColor: Colors.primary,
    marginTop: 24
 },
 google:{
    backgroundColor: Colors.white,
    paddingVertical: 14,
    paddingHorizontal: '18%',
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"

  },
  googleText:{
    color: Colors.black,
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  apple:{
    backgroundColor: Colors.black,
    paddingVertical: 14,
    paddingHorizontal: '20%',
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"

  },
  appleText:{
    color: Colors.white,
    fontSize: 16,
    fontFamily: 'Inter-SemiBold'
  },

});

export default Osios;