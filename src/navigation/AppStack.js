import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/getstarted/GetStarted';
import Signup from '../screens/signup/Signup';

const Stack = createNativeStackNavigator();

function AppStack () {
    return(
       <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='GetStarted' component={GetStarted}/>
        <Stack.Screen name='Signup' component={Signup}/>
       </Stack.Navigator>
    );
}
export default AppStack;