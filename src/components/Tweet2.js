import React from 'react'
import {View,  Image, Text, ImageBackground} from 'react-native'
import Colors from '../assets/colors/Colors'
import Dots from '../assets/images/Dots.svg'
import Comm from '../assets/images/Comm.svg'
import Arrowup from '../assets/images/Arrowup.svg'
import Dall from '../assets/images/Dall.svg'

export default function Tweet2() {
  return (
    <View>
        <View style={{backgroundColor: Colors.primary2, 
        borderColor: Colors.white, 
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 6,
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
            <Image source={require('../assets/images/Rob.png')} style={{ width: 36,
   height: 36, 
   borderRadius: 18, 
   borderWidth: 2,
   borderColor: Colors.white}}/>
   <View style={{
     flex: 1, paddingHorizontal: 10, 
     padding: 8, 
     

}}>
    <Text style={{fontFamily:'Inter-Bold', fontSize: 14, color: Colors.white}}>Robert Fox</Text>
   </View>
    <Dots/>
            </View>

            <Text style={{fontSize: 16,
            fontFamily: 'Inter-Medium,',
            color: Colors.white,
            marginTop:8, lineHeight: 24}}>I'm afraid my 
            palmers may have done something with my mom... she's married
            
            </Text>
            <View style={{ height: 160, marginTop: 12}}>
                <ImageBackground source={require('../assets/images/People.png')} 
                style={{
                  flex:1,
                }}>
                <Image source={require('../assets/images/Buton.png')}
                style={{
                    position: "absolute",
                top:56, left: 144,
                }}/>
                </ImageBackground>
            </View>
            <Text style={{fontFamily: 'Inter-Regular', 
            fontSize: 12,
            color: Colors.strokeWhite, marginTop: 8}}>
                19h ago </Text>
                <View style={{ 
                    marginTop: 16,
                    flexDirection: "row",
                    justifyContent: "space-between"
                    }}> 
                    <View style={{ flexDirection: "row", 
                    width: "25%", 
                    justifyContent: "space-around", }}>
                        <Comm/>
                <Arrowup/>
                </View>
                <View style={{ flexDirection: "row", 
                    width: "25%", 
                    justifyContent: "space-around",}}>
                <Dall/>
            
                </View>
                </View>
        </View>
    </View>

    </View>
  )
}


