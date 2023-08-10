import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import MainTab from "./mainTab";
import ServiceTab from "./serviceTab";
import ExploreTab from "./exploreTab";
import ProfileTab from "./profileTab";

const Tab = createBottomTabNavigator()

const styleTabBar = {
    tabBarStyle: {
        backgroundColor: "#002851"
    },
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#ffffff"
}

const tabs = [
    {
        id: 0,
        name: "Inicio",
        component: MainTab,
        icon: 'home'
    },
    {
        id: 1,
        name: "Consultar",
        component: ServiceTab,
        icon: 'calendar'
    },
    {
        id: 2,
        name: "Explorar",
        component: ExploreTab,
        icon: 'search'
    },
    {
        id: 3,
        name: "Perfil",
        component: ProfileTab,
        icon: 'person'
    },
]

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={styleTabBar}>
            {tabs.map((tab) => (
                <Tab.Screen
                    key={tab.id}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name={tab.icon}
                                color={color}
                                size={size}
                            />
                        )
                    }}
                />
            ))}
        </Tab.Navigator>
    )
}