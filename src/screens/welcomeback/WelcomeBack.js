import React, { useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { style } from './Style'
import SectionHeader from '../../components/SectionHeader'
import BackArrow from '../../assets/images/BackArrow.svg'
import Mail from '../../assets/images/Mail.svg'
import Lock from '../../assets/images/Lock.svg'
import Eye from '../../assets/images/Eye.svg'
import Button from '../../components/Button'
import EmailInput from '../../components/EmailInput'
import Osios from '../../components/Osios'
import Sand from '../../assets/images/Sand.svg'
import {useNavigation} from '@react-navigation/native';
import { login } from '../../api/Api';


export default function WelcomeBack() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={style.container}>
        <SectionHeader icon={<BackArrow/>}/>
        <View style={style.welcomeView}>
        <Text style={style.welcome}>Welcome Back</Text>
        </View>
        <View style={style.box}>
            <View style={style.confirm}>
           <EmailInput 
           icon={<Mail/>} 
           placeholder='Johndoe@gmail.com'
           value={email}
           onChangeText={setEmail}/>
           </View>
           <View style={style.password}>
           <EmailInput 
           icon={<Lock/>} 
           placeholder='Password'
           value={password}
           onChangeText={setPassword}
           secureTextEntry/>
           <Eye/>
           </View>
           
           <View style={style.buttonView}>
                <Button title={'Login'} screen={'Home'} navigation={navigation} onPress={handleLogin}/>
            </View>
            <Text style={style.phone}>Continue with Phone Number</Text>
        </View>
        <Osios/>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={style.forgot}>Forgot Password</Text>

        </TouchableOpacity>
        <View style={{position: "relative", top: '4%'}}>
        <Sand/>

        </View>
    </View>
  )
}
