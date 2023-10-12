import React, { useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import { style } from './Style'
import SectionHeader from '../../components/SectionHeader'
import BackArrow from '../../assets/images/BackArrow.svg'
import Mail from '../../assets/images/Mail.svg'
import Lock from '../../assets/images/Lock.svg'
import Eye from '../../assets/images/Eye.svg'
import EmailInput from '../../components/EmailInput'
import Osios from '../../components/Osios'
import Sand from '../../assets/images/Sand.svg'
import {useNavigation} from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function WelcomeBack() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const navigation = useNavigation();

  useEffect(() => {
    const checkLoggedIn = async () => {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        navigation.navigate('Home');
      }
    };
    checkLoggedIn();
  }, [navigation]);

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    try {
     
      const trimmedEmail = email.trim();
      
      if (!trimmedEmail || !password) {
        setError('Please provide both email and password.');
        return;
      }

      if (!isEmailValid(trimmedEmail)) {
        setError('Invalid email address.');
        return;
      }

      const response = await axios.post('https://7tracking.com/palm/api.php', {
        email: trimmedEmail,
        password,
      });
      console.log(response)

      if (response.status === 200) {
        const userId = response.data.userId;
        if (userId) {
          await AsyncStorage.setItem('userId', userId);
          navigation.navigate('Home');
        } 
        else {
          setError('User does not exist or invalid credentials.');
        }
      } 
      // else {
      //   setError('User does not exist or invalid credentials.');
      // }
      
    } catch (error) {
      console.error('Error in login:', error )
      setError('An error occurred. Please try again.');
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
           <Button title="Login" onPress={handleLogin}/>
            <Text style={{ color: 'red' }}>{error}</Text>
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
