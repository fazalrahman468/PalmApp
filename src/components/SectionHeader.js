import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../assets/colors/Colors';
import { Image } from 'react-native-svg';

function SectionHeader({ icon, title}) {
  return (
    <View style={styles.container}>
        <View style={styles.gView}>
            <TouchableOpacity>{icon}</TouchableOpacity>
            <View 
            style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
                <Text style={styles.g}>{title}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {backgroundColor: Colors.primary, paddingBottom: 13},
    gView: {
      marginTop: 24,
      marginHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    g: {
      fontSize: 16,
      fontFamily: 'Inter-Medium',
      color: Colors.white,
    },
  });

export default SectionHeader;