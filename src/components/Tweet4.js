import React from 'react'
import {View,  Image, Text} from 'react-native'
import Colors from '../assets/colors/Colors'
import Dots from '../assets/images/Dots.svg'
import Arrowup from '../assets/images/Arrowup.svg'
import Rea7 from '../assets/images/Rea7.svg'
import Com from '../assets/images/Com.svg'

export default function Tweet4() {
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
    <Text style={{fontFamily:'Inter-Bold', fontSize: 14, color: Colors.white}}>Cody Fisher</Text>
   </View>
    <Dots/>
            </View>

            <Text style={{fontSize: 16,
            fontFamily: 'Inter-Medium,',
            color: Colors.white,
            marginTop:8, lineHeight: 24}}>There someone I like but for them and because they're 
            taken I can't be with them but I'm starting to talk to this other person hoping
            maybe I can get over them thoughts?
            
            </Text>
            <View style={{ height: 160, marginTop: 12}}>
                <Image source={require('../assets/images/Place.png')} 
                style={{
                  flex:1,
                }}/>
              
                
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


