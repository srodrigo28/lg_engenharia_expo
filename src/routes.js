import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import DiarioObra from "./pages/DiarioObra"
import Menu from "./pages/Menu";
import Abastecer from "./pages/Abastecer";
import Veiculo from "./pages/Veiculo";
import Ponto from "./pages/Ponto";

import RecoverPassword from "./pages/RecoverPassword";

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} // Pronto
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Menu" component={Menu} // Pronto
                    options={{headerShown: false}}
                />
                <Stack.Screen name="NewUser" component={NewUser}  // Pronto
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Abastecer" component={Abastecer}  // Pronto
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Veiculo" component={Veiculo}  // Pronto
                    options={{headerShown: false}}
                />
                <Stack.Screen name="DiarioObra" component={DiarioObra} 
                        options={{headerShown: false}}
                />
                <Stack.Screen name="Ponto" component={Ponto} 
                        options={{headerShown: false}}
                />
                <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}