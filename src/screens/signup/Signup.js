import React,{useState} from 'react';
import {View, Text, Image } from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
import Osios from '../../components/Osios';
import Mail from '../../assets/images/Mail.svg';



export default function Signup() {
   const navigation = useNavigation();

   const [firstName, setFirstName] = useState(''); 
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [date, setDate] = useState('');

   const [firstNameError, setFirstNameError] = useState(''); 
   const [lastNameError, setLastNameError] = useState('');
   const [emailError, setEmailError] = useState('');
   const [phoneError, setPhoneError] = useState('');
   const [dateError, setDateError] = useState('');

   const saveData = async() => {
   
      if (!firstName) {
         setFirstNameError(true)
      }

      if (!firstName){
         return false
      }

   const url= 'https://7tracking.com/palm/api.php';
   let result = await fetch(url, {
      method: "POST",
      body: JSON.stringify({firstName, lastName, email, phone, date})
   });
   }
   
  return (
    <View style={style.container}>
    <SectionHeader icon={<BackArrow/>} title='Verify your humanity'/>    
     <Text style={style.account}>Create your account</Text>
     <Osios/>
     <Text style={style.using}>Or Using</Text>
     <View style={style.box}>
     <View style={{ flexDirection: "row"}}>
     <View style={style.john}>
        
        <EmailInput 
        icon={<User/>} 
        placeholder='John' 
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        />
        {firstNameError ? <Text>Please enter a name</Text> : null}
     </View>
     <View style={style.doe}>
     <EmailInput 
     placeholder= 'Doe'
     value={lastName}
     onChangeText={(text) => setLastName(text)}
     />
     </View>
     </View>
     <View style={style.phone}>
        
        <EmailInput1 
        icon={<Mail/>} 
        placeholder='Email' 
        value={email}
        onChangeText={(text) => setEmail(text)}
        />
     </View>
     <View style={style.phone}>
        
        <EmailInput1 
        icon={<Phone/>} 
        placeholder='Phone Number' 
        value={phone}
        onChangeText={(text) => setPhone(text)}
        />
     </View>
     <View style={style.phone}>
        
        <EmailInput1 
        icon={<Calendar/>} 
        placeholder='Date of birth' 
        value={date}
        onChangeText={(text) => setDate(text)}/>
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
     <Button title={'Next'} 
     screen={'Signup2'} 
     navigation={navigation} 
     onPress={saveData}
     />
     </View>
     </View>
     <Sand/>
    </View>
  )
}
