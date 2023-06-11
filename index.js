/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { WelcomeScreen, Login } from './screens';

AppRegistry.registerComponent(appName, () => () => <Login />);
