import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../assets/colors/Colors';
import Calendar from '../assets/images/Calendar.svg';

const DateInput = () => {
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
   
  };


  return (
    <TouchableOpacity onPress={() => setShowDatePicker(true)}
    style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.strokeWhite,
        marginTop: 12,
        borderRadius: 12,
        paddingLeft: 12,
      }}>
        <Calendar />
      <TextInput
        style={{
          fontSize: 14,
          fontFamily: 'Inter-Medium',
          marginLeft: 12,
          color: date ? Colors.black : '#B3B5B5',
          width: "100%"
        }}
        placeholder="Date of birth"
        placeholderTextColor="#B3B5B5"
        value={date ? date.toLocaleDateString() : ''}
        editable={false}
      
      />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
    </TouchableOpacity>
  );
};
export default DateInput;
