import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/getstarted/GetStarted';
import Signup from '../screens/signup/Signup';
import Signup2 from '../screens/signup/Signup2';
import ConfirmCode from '../screens/confirmcode/ConfirmCode';
import CreatePassword from '../screens/password/CreatePassword';

const Stack = createNativeStackNavigator();

function AppStack () {
    return(
       <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='GetStarted' component={GetStarted}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Signup2' component={Signup2}/>
        <Stack.Screen name='ConfirmCode' component={ConfirmCode}/>
        <Stack.Screen name='CreatePassword' component={CreatePassword}/>
       </Stack.Navigator>
    );
}
export default AppStack;