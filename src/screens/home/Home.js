import React from 'react'
import { View, Image, ScrollView, TouchableOpacity,Text } from 'react-native'
import { style } from './Style'
import Logo1 from '../../assets/images/Logo1.svg'
import Bell from '../../assets/images/Bell.svg'
import Sand from '../../assets/images/Sand.svg'
import Tweet from '../../components/Tweet'
import Tweet2 from '../../components/Tweet2'
import Tweet3 from '../../components/Tweet3'
import Tweet4 from '../../components/Tweet4'
import {useNavigation} from '@react-navigation/native'; 
import Colors from '../../assets/colors/Colors'


export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={style.container}>
    <View style={style.section}>
     <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
     <Image source={require('../../assets/images/img.png')} style={style.logo}/>
     </TouchableOpacity>
     <Logo1/>
     <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
     <Text style={{fontFamily: 'Inter-Medium', color : Colors.white, fontSize: 14}}>Log out</Text>
     </TouchableOpacity>
    </View>
    <ScrollView alwaysBounceVertical>
    <Tweet/>        
    <Tweet2/>
    <Tweet3/>
    <Tweet4/>
    <TouchableOpacity style={style.mod}>
     <Image source={require('../../assets/images/Mod.png')}/>
    </TouchableOpacity>
    </ScrollView>
    </View>
  )
}
