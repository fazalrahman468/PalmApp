import React from 'react'
import {View, Image} from 'react-native'
import { style } from './Style'

export default function Profile() {
  return (
    <View style={style.container}>
        <View style={style.pro}>
            <Image source={require('../../assets/images/Avatar.png')}/>

        </View>
    </View>
  )
}
