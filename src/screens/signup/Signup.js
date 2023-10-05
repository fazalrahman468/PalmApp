import React from 'react';
import {View, Text, Image } from 'react-native';
import { style } from './Style';
import SectionHeader from '../../components/SectionHeader';
import BackArrow from '../../assets/images/BackArrow.svg';
import Google from '../../assets/images/Google.svg';
import Apple from '../../assets/images/Apple.svg';
import User from '../../assets/images/User.svg';
import Phone from '../../assets/images/Phone.svg';
import Calendar from '../../assets/images/Calendar.svg';
import EmailInput from '../../components/EmailInput';
import EmailInput1 from '../../components/EmailInput1';
import Sand from '../../assets/images/Sand.svg';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Osios from '../../components/Osios';



export default function Signup() {
   const navigation = useNavigation();
   
  return (
    <View style={style.container}>
    <SectionHeader icon={<BackArrow/>} title='Verify your humanity'/>    
     <Text style={style.account}>Create your account</Text>
     <Osios/>
     <Text style={style.using}>Or Using</Text>
     <View style={style.box}>
     <View style={{ flexDirection: "row"}}>
     <View style={style.john}>
        
        <EmailInput icon={<User/>} placeholder='John' />
     </View>
     <View style={style.doe}>
     <EmailInput placeholder= 'Doe'/>
     </View>
     </View>
     <View style={style.phone}>
        
        <EmailInput1 icon={<Phone/>} placeholder='Phone Number' />
     </View>
     <View style={style.phone}>
        
        <EmailInput1 icon={<Calendar/>} placeholder='Date of birth' />
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
     <Button title={'Next'} screen={'Signup2'} navigation={navigation}/>
     </View>
     </View>
     <Sand/>
    </View>
  )
}
