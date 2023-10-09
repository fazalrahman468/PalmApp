import React from 'react'
import {View,  Image, Text} from 'react-native'
import Colors from '../assets/colors/Colors'
import Dots from '../assets/images/Dots.svg'
import Rea from '../assets/images/Rea.svg'
import Arrowup from '../assets/images/Arrowup.svg'
import Com from '../assets/images/Com.svg'

export default function Tweet() {
  return (
    <View>
        <View style={{backgroundColor: Colors.primary2, 
        borderColor: Colors.white, 
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 12,
        paddingHorizontal: 10,
        paddingVertical: 14,
        margin: 10
        }}>
        <View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
                }}>
            <Image source={require('../assets/images/Les.png')} style={{ width: 36,
   height: 36, 
   borderRadius: 18, 
   borderWidth: 2,
   borderColor: Colors.white}}/>
   <View style={{
     flex: 1, paddingHorizontal: 10}}>
    <Text style={{fontFamily:'Inter-Bold', fontSize: 14, color: Colors.white}}>Leslie Alexander</Text>
    <Text style={{fontFamily: 'Inter-Regular', fontSize: 12, color: Colors.white}}>Private</Text>
   </View>
    <Dots/>
            </View>

            <Text style={{fontSize: 16,
            fontFamily: 'Inter-Medium,',
            color: Colors.white,
            marginTop:8, lineHeight: 24}}>I have a bad habit of spending here because I'll 
            see something that's 200 AUD
            and my goes "it's okay that's only $125 USD"
            
            </Text>
            <Text style={{fontFamily: 'Inter-Regular', 
            fontSize: 12,
            color: Colors.strokeWhite, marginTop: 8}}>
                12h ago | University of Wisconsin - Madison</Text>
                <View style={{ 
                    marginTop: 16,
                    flexDirection: "row",
                    justifyContent: "space-between"
                    }}> 
                    <View style={{ flexDirection: "row", 
                    width: "25%", 
                    justifyContent: "space-around", }}>
                <Rea/>
                <Arrowup/>
                </View>
                <View style={{ flexDirection: "row", 
                    width: "25%", 
                    justifyContent: "space-around",}}>
                <Com/>
            
                </View>
                </View>
        </View>
    </View>

    </View>
  )
}


