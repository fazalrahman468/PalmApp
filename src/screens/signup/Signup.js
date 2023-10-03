import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { style } from './Style';
import SectionHeader from '../../components/SectionHeader';
import BackArrow from '../../assets/images/BackArrow.svg';
import User from '../../assets/images/User.svg';
import Phone from '../../assets/images/Phone.svg';
import Calendar from '../../assets/images/Calendar.svg';
import EmailInput from '../../components/EmailInput';
import EmailInput1 from '../../components/EmailInput1';
import Sand from '../../assets/images/Sand.svg';
import Button from '../../components/Button';



export default function Signup() {
   
  return (
    <View style={style.container}>
    <SectionHeader icon={<BackArrow/>} title='Verify your humanity'/>    
     <Text style={style.account}>Create your account</Text>
     <View style={style.google}>
     <Image source={require('../../assets/images/Google.png')}/>
     <Text style={style.googleText}>Continue with Google</Text>
     </View>
     <View style={style.apple}>
     <Image source={require('../../assets/images/Apple.png')}/>
     <Text style={style.appleText}>Continue with Apple</Text>
     </View>
     <Text style={style.using}>Or Using</Text>
     <View style={style.box}>
     <View style={{ flexDirection: "row"}}>
     <View style={style.john}>
        <User/>
        <EmailInput placeholder='John' />
     </View>
     <View style={style.doe}>
     <EmailInput placeholder= 'Doe'/>
     </View>
     </View>
     <View style={style.phone}>
        <Phone/>
        <EmailInput1 placeholder='Phone Number' />
     </View>
     <View style={style.phone}>
        <Calendar/>
        <EmailInput1 placeholder='Date of birth' />
     </View>
     <View style={style.genView}>
     <Text style={style.gen}>Gender</Text>
     <View style={style.genCon}>
        <View style={style.male}>
        <Text style={style.maleText}>Male</Text>
        </View>
        <Text style={style.femaleText}>Female</Text>
     </View>
     </View>
     <View style={{marginTop: 12,}}>
     <Button title={'Next'}/>
     </View>
     </View>
     <Sand/>
    </View>
  )
}
