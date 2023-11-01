import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './AppStack';
import AuthStack from './AuthStack';


const Stack = createNativeStackNavigator();

function RootStack () { 
    return(
       <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Auth' component={AuthStack}/>
        <Stack.Screen name='App' component={AppStack}/>
       </Stack.Navigator>
    );
}
export default RootStack;

// navigation.navigate('App',{screen:"Home"})