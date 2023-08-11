import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from "./loginScreen";
import RegisterScreen from "./registerScreen";
import Tabs from "./tabs";
import ScheduleScreen from "./scheduleScreen";
import ExploreTab from "./tabs/exploreTab";

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