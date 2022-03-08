import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import DiarioObra from "./pages/DiarioObra"
import Menu from "./pages/Menu";

import RecoverPassword from "./pages/RecoverPassword";

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} 
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Menu" component={Menu} 
                    options={{headerShown: false}}
                />
                <Stack.Screen name="NewUser" component={NewUser} 
                    options={{headerShown: false}}
                />
                <Stack.Screen name="DiarioObra" component={DiarioObra} />
                <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}