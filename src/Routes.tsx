import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/registerScreen";
import Tabs from "./screens/tabs";
import ScheduleScreen from "./screens/scheduleScreen";
import ExploreTab from "./screens/tabs/exploreTab";

const Tab = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="LoginScreen"
          component={LoginScreen as React.FC}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="RegisterScreen"
          component={RegisterScreen as React.FC}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="TabsScreen"
          component={Tabs as React.FC}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="ScheduleScreen"
          component={ScheduleScreen as React.FC}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="ExploreTab"
          component={ExploreTab as React.FC}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}