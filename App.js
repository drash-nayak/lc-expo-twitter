import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from "./screens/HomeScreen";
import NewTweetScreen from "./screens/NewTweetScreen";
import TweetScreen from "./screens/TweetScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SearchScreen from "./screens/SearchScreen";
import NotificationsScreen from "./screens/NotificationsScreen";

import {Ionicons} from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerBackTitleVisible: false
            }}>
            <Stack.Screen name="Tab" component={TabNavigator}
                          options={{headerShown: false}}
            ></Stack.Screen>
            <Stack.Screen name="New Tweet"
                          component={NewTweetScreen}
                          options={{
                              title: ""
                          }}
            ></Stack.Screen>
            <Stack.Screen name="Tweet Screen" component={TweetScreen}
                          options={{
                              title: ""
                          }}
            ></Stack.Screen>
            <Stack.Screen name="Profile Screen"
                          options={{
                              title: ""
                          }}
                          component={ProfileScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }}>
            <Tab.Screen name="Home1" component={HomeScreen}
                        options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="md-home" size={size} color={color}/>
                            )
                        }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
                        options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="md-search" size={size} color={color}/>
                            )
                        }}
            />
            <Tab.Screen name="Notifications" component={NotificationsScreen}
                        options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="notifications" size={size} color={color}/>
                            )
                        }}
            />
        </Tab.Navigator>

    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={{
                headerShown: true
            }}>
                <Drawer.Screen name="Home" component={HomeStackNavigator}/>
                <Drawer.Screen name="Settings" component={SettingsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
