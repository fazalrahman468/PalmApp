import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../assets/colors/Colors';
import Calendar from '../assets/images/Calendar.svg';

const DateInput = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.strokeWhite,
        marginTop: 12,
        borderRadius: 12,
        paddingLeft: 12,
      }}>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Calendar />
      </TouchableOpacity>
      <TextInput
        style={{
          flex: 1,
          fontSize: 14,
          fontFamily: 'Inter-Medium',
          marginLeft: 12,
        }}
        placeholder="Date of birth"
        placeholderTextColor="#000000"
        editable={false}
      />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};
export default DateInput;
