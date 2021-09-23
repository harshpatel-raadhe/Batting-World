import React from 'react'
import { View, Text , Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons , Ionicons ,Feather , Entypo  } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen';
import SportScreen from '../Screens/SportScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import AboutScreen from '../Screens/AboutScreen';

const BotttomTab = createBottomTabNavigator()

export default function BottomNavigation() {
    return (
        <BotttomTab.Navigator initialRouteName={HomeScreen} screenOptions={{
            headerShown:false,
            tabBarStyle:{
                backgroundColor:'black',
                borderRadius:18,
                height:70,
                position:'absolute',
                marginBottom:16,
                marginHorizontal:16,
            }
        }} >
            <BotttomTab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon:(({focused}) => <MaterialCommunityIcons name="fire" size={24} color={focused ? '#fff' : '#323232'} />)  ,tabBarShowLabel:false}} />
            <BotttomTab.Screen name="Sport" component={SportScreen} options={{ tabBarIcon:(({focused}) => <Ionicons name="ios-football-sharp" size={24} color={focused ? '#fff' : '#323232'} />) ,tabBarShowLabel:false}}/>
            <BotttomTab.Screen name="Payment" component={PaymentScreen} options={{ tabBarIcon:(({focused}) => <Feather name="credit-card" size={24} color={focused ? '#fff' : '#323232'} />) ,tabBarShowLabel:false}}/>
            <BotttomTab.Screen name="About" component={AboutScreen} options={{ tabBarIcon:(({focused}) => <Entypo name="dots-three-vertical" size={24} color={focused ? '#fff' : '#323232'} />) ,tabBarShowLabel:false}}/>
        </BotttomTab.Navigator>
    )
}
