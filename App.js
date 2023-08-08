import "react-native-gesture-handler" //importar no terminal
import * as React from 'react';
import{NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import DailypickScreen from "./screens/Dailypick";
import SpaceCraftScreen from "./screens/SpaceCraft";
import StarMapScreen from "./screens/StarMap";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name = "Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name = "SpaceCraft" component={SpaceCraftScreen}></Stack.Screen>
        <Stack.Screen name = "Dailypick" component={DailypickScreen}></Stack.Screen>
        <Stack.Screen name = "StarMap" component={StarMapScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
