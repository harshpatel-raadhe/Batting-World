import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './src/Navigation/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={{flex:1 ,backgroundColor:'green' }} >
  <StatusBar style="auto"/>
    <NavigationContainer >
        <BottomNavigation />
      </NavigationContainer>
      </View>
  );
}


