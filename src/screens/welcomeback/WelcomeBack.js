import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from 'react-native';
import {style} from './Style';
import SectionHeader from '../../components/SectionHeader';
import BackArrow from '../../assets/images/BackArrow.svg';
import Mail from '../../assets/images/Mail.svg';
import EmailInput from '../../components/EmailInput';
import Osios from '../../components/Osios';
import Sand from '../../assets/images/Sand.svg';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Password from '../../components/Password';

export default function WelcomeBack() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const isEmailValid = email => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    try {
      const trimmedEmail = email.trim();

      if (!trimmedEmail) {
        setError('Please provide an email');
        return;
      }

      if (!isEmailValid(trimmedEmail)) {
        setError('Invalid email address.');
        return;
      }

      if (!password) {
        setError('Please provide a password.');
        return;
      }

      console.log(trimmedEmail,password)


      setLoading(true);
      let data = new FormData();
      data.append('type', 'login');
      data.append('email', trimmedEmail);
      data.append('password', password);
      
      let config = {
        method: 'post',
        url: 'https://7tracking.com/palm/api.php',
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        
              if (response.status === 200) {
                const userId = response.data.user_id;
                if (userId) {
                  navigation.navigate('App',{screen: "Home"});
                } else {
                  setError('User does not exist or invalid credentials.');
                }
        
              }
              else {
                setError('An error occurred during the login process.');
              }
      })
      .catch((error) => {
        console.log(error);
      });
      
      setLoading(false);
    }
      
     catch (error) {
      console.error('Error in login:', error);
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  const canProceed = email && password;

  return (
    <View style={style.container}>
      <SectionHeader icon={<BackArrow />} />
      <View style={style.welcomeView}>
        <Text style={style.welcome}>Welcome Back</Text>
      </View>
      <View style={style.box}>
        <View style={style.confirm}>
          <EmailInput
            icon={<Mail />}
            placeholder="Johndoe@gmail.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={style.password}>
          <Password  onChangeText={(text)=>setPassword(text)}/>
        </View>

        <View style={style.buttonView}>
          {loading ? (
            <ActivityIndicator size={30} color="#000000" />
          ) : (
            <Button title="Login" onPress={handleLogin} color= '#26BA78' disabled={!canProceed}/>
          )}
          <Text style={{color: 'red'}}>{error}</Text>
        </View>
        <Text style={style.phone}>Continue with Phone Number</Text>
      </View>
      <Osios />
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={style.forgot}>Forgot Password</Text>
      </TouchableOpacity>
      <View style={{position: 'relative', top: '4%'}}>
        <Sand />
      </View>
    </View>
  );
}
