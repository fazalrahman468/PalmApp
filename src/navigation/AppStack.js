import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/getstarted/GetStarted';
import Signup from '../screens/signup/Signup';
import Signup2 from '../screens/signup/Signup2';
import ConfirmCode from '../screens/confirmcode/ConfirmCode';
import CreatePassword from '../screens/password/CreatePassword';
import WelcomeBack from '../screens/welcomeback/WelcomeBack';
import ResetPassword from '../screens/reset/ResetPassword';
import ResetPassword1 from '../screens/reset/ResetPassword1';
import NewPassword from '../screens/newpassword/NewPassword';
import RecPassword from '../screens/recpassword/RecPassword';

const Stack = createNativeStackNavigator();

function AppStack () {
    return(
       <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='GetStarted' component={GetStarted}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Signup2' component={Signup2}/>
        <Stack.Screen name='ConfirmCode' component={ConfirmCode}/>
        <Stack.Screen name='CreatePassword' component={CreatePassword}/>
        <Stack.Screen name='WelcomeBack' component={WelcomeBack}/>
        <Stack.Screen name='ResetPassword' component={ResetPassword}/>
        <Stack.Screen name='ResetPassword1' component={ResetPassword1}/>
        <Stack.Screen name='NewPassword' component={NewPassword}/>
        <Stack.Screen name='RecPassword' component={RecPassword}/>
       </Stack.Navigator>
    );
}
export default AppStack;