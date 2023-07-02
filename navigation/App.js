import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {images, colors, icons} from '../constants';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackRouter} from 'react-navigation';
import {WelcomeScreen, Login, Register, Messenger} from '../screens';
import UITab from './UI-tab';
const Stack = createNativeStackNavigator();
function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Register'} component={Register} />
        <Stack.Screen name={'UITab'} component={UITab} />
        <Stack.Screen name={'Messenger'} component={Messenger} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
