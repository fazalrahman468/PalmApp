import React, {useState} from 'react';
import {View, Text, ScrollView, Button, ActivityIndicator} from 'react-native';
import {style} from './Style';
import SectionHeader from '../../components/SectionHeader';
import BackArrow from '../../assets/images/BackArrow.svg';
import User from '../../assets/images/User.svg';
import Phone from '../../assets/images/Phone.svg';
import Calendar from '../../assets/images/Calendar.svg';
import EmailInput from '../../components/EmailInput';
import EmailInput1 from '../../components/EmailInput1';
import Sand from '../../assets/images/Sand.svg';
// import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Osios from '../../components/Osios';
import Mail from '../../assets/images/Mail.svg';
import Colors from '../../assets/colors/Colors';
import axios from 'axios';

export default function Signup() {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState();

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
  });

  const saveData = async () => {
    setIsLoading(true);
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = 'Please enter a name';
    }

    if (!lastName) {
      newErrors.lastName = 'Please enter a name';
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!/^\d+$/.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!date) {
      newErrors.date = 'Please fill the form';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://7tracking.com/palm/api.php', {
        phone,
      });
      const receivedOtp = response.data.otp;
      setOtp(receivedOtp);

      // Navigate to the OTP verification screen
      navigation.navigate('ConfirmCode', {
        otp: receivedOtp,
      });
    } catch (error) {
      console.error('Error sending OTP:', error);
      setIsLoading(false);
    }

  };

  return (
    <ScrollView>
      <View style={style.container}>
        <SectionHeader icon={<BackArrow />} title="Verify your humanity" />
        <Text style={style.account}>Create your account</Text>
        <Osios />
        <Text style={style.using}>Or Using</Text>

        <View style={style.box}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '50%'}}>
              <View style={style.john}>
                <EmailInput
                  icon={<User />}
                  placeholder="John"
                  value={firstName}
                  onChangeText={text => setFirstName(text)}
                />
              </View>
              {errors.firstName ? (
                <Text style={{color: 'red'}}>{errors.firstName}</Text>
              ) : null}
            </View>
            <View style={{width: '50%'}}>
              <View style={style.doe}>
                <EmailInput
                  placeholder="Doe"
                  value={lastName}
                  onChangeText={text => setLastName(text)}
                />
              </View>
              {errors.lastName ? (
                <Text style={{color: 'red', marginLeft: 16}}>
                  {errors.lastName}
                </Text>
              ) : null}
            </View>
          </View>
          <View style={style.phone}>
            <EmailInput1
              icon={<Mail />}
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
          </View>
          {errors.email ? (
            <Text style={{color: 'red'}}>{errors.email}</Text>
          ) : null}

          <View style={style.phone}>
            <EmailInput1
              icon={<Phone />}
              placeholder="Phone Number"
              value={phone}
              onChangeText={text => setPhone(text)}
              keyboardType="phone-pad"
            />
          </View>
          {errors.phone ? (
            <Text style={{color: 'red'}}>{errors.phone}</Text>
          ) : null}

          <View style={style.phone}>
            <EmailInput1
              icon={<Calendar />}
              placeholder="Date of birth"
              value={date}
              onChangeText={text => setDate(text)}
            />
          </View>
          {errors.date ? (
            <Text style={{color: 'red'}}>{errors.date}</Text>
          ) : null}

          <View style={style.genView}>
            <Text style={style.gen}>Gender</Text>
            <View style={style.genCon}>
              <View style={style.male}>
                <Text style={style.maleText}>Male</Text>
              </View>
              <Text style={style.femaleText}>Female</Text>
            </View>
          </View>
          <View style={{marginTop: 12}}>
            {isLoading ? (
              <ActivityIndicator size={30} color="#000000" />
            ) : (
              <Button title="Next" onPress={saveData} color="#26BA78" />
            )}
            {/* <Button title={'Next'} 
     screen={'ConfirmCode'} 
     navigation={navigation} 
     onPress={saveData}
     /> */}
          </View>
        </View>

        <Sand />
      </View>
    </ScrollView>
  );
}
