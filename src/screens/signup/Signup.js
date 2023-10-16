import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {style} from './Style';
import SectionHeader from '../../components/SectionHeader';
import BackArrow from '../../assets/images/BackArrow.svg';
import User from '../../assets/images/User.svg';
import EmailInput from '../../components/EmailInput';
import EmailInput1 from '../../components/EmailInput1';
import Sand from '../../assets/images/Sand.svg';
import {useNavigation} from '@react-navigation/native';
import Osios from '../../components/Osios';
import Mail from '../../assets/images/Mail.svg';
import axios from 'axios';
import PhoneNumberInput from '../../components/PhoneSelector';
import DateInput from '../../components/Date';

export default function Signup() {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState();
  const [selectedGender, setSelectedGender] = useState('male');

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

          <PhoneNumberInput />
          {errors.phone ? (
            <Text style={{color: 'red'}}>{errors.phone}</Text>
          ) : null}
          <DateInput />
          {errors.date ? (
            <Text style={{color: 'red'}}>{errors.date}</Text>
          ) : null}

          <View style={style.genView}>
            <Text style={style.gen}>Gender</Text>
            <View style={style.genCon}>
              <View style={[style.male, selectedGender === 'male' ? style.selectedGender : null]}>
                <TouchableOpacity onPress={() => setSelectedGender('male')}
                style={{ backgroundColor: selectedGender === 'male' ? 'white' : 'transparent' }}>
                  <Text style={style.maleText}>Male</Text>
                </TouchableOpacity>
              </View>
              <View style={[style.femaleStyle, selectedGender === 'female' ? style.selectedGender : null]}>
              <TouchableOpacity onPress={() => setSelectedGender('female')}
              style={{ backgroundColor: selectedGender === 'female' ? 'white' : 'transparent' }}>
                <Text style={style.femaleText}>Female</Text>
              </TouchableOpacity>

              </View>
            </View>
          </View>
          <View style={{marginTop: 12}}>
            {isLoading ? (
              <ActivityIndicator size={30} color="#000000" />
            ) : (
              <Button title="Next" onPress={saveData} color="#26BA78" />
            )}
          </View>
        </View>

        <Sand />
      </View>
    </ScrollView>
  );
}
