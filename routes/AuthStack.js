import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'

const AuthStack = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Log-in" component={LogIn} />
            <Stack.Screen name="Sign-Up" component={SignUp} />
        </Stack.Navigator>
    )
}

export default AuthStack