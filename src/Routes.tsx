import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from "./loginScreen";
import RegisterScreen from "./registerScreen";
import Tabs from "./tabs";

const Tab = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="LoginScreen" 
                    component={LoginScreen} 
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="RegisterScreen" 
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="TabsScreen" 
                    component={Tabs}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}