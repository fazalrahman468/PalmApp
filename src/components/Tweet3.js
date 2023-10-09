import React from 'react'
import {View,  Image, Text, ImageBackground} from 'react-native'
import Colors from '../assets/colors/Colors'
import Dots from '../assets/images/Dots.svg'
import Arrowup from '../assets/images/Arrowup.svg'
import Link from '../assets/images/Link.svg'
import Com from '../assets/images/Com.svg'
import Rea7 from '../assets/images/Rea7.svg'

export default function Tweet3() {
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
            <Image source={require('../assets/images/Dar.png')} style={{ width: 36,
   height: 36, 
   borderRadius: 18, 
   borderWidth: 2,
   borderColor: Colors.white}}/>
   <View style={{
     flex: 1, paddingHorizontal: 10, 
     padding: 8, 
     

}}>
    <Text style={{fontFamily:'Inter-Bold', fontSize: 14, color: Colors.white}}>Darlene Robertson</Text>
   </View>
    <Dots/>
            </View>

            <Text style={{fontSize: 16,
            fontFamily: 'Inter-Medium,',
            color: Colors.white,
            marginTop:8, lineHeight: 24}}>There someone I like but for them and because
            
            </Text>
           <View style={{backgroundColor: Colors.white2,
             paddingVertical: 10, paddingHorizontal: 12,
             borderRadius: 10, marginTop: 8, flexDirection: "row"}}>
                <View style={{ width: "90%"}}>
            <Text style={{fontFamily: 'Inter-SemiBold', fontSize: 14, color: Colors.black1}}>
                Annabell 2022</Text>
            <Text style={{fontFamily: 'Inter-Regular', fontSize: 12, color: Colors.black1}}>
                Has anyone on here had someone ha</Text>
                </View>
                <Link/>
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
                        <Rea7/>
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


