/**
 * @format
 */
import { AppRegistry } from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
/*
import { 
    WelcomeScreen, 
    Login, 
    Register, 
    MobileList, 
    ProductGridView,
    Setting } from './screens';
import UITab from './navigation/UI-tab';
*/
import App from './navigation/App'

AppRegistry.registerComponent(appName, () => () => <App />);