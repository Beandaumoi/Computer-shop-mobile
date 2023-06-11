/**
 * @format
 */

import WelcomeScreen from './screens/WelcomeScreen';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => () => <WelcomeScreen />);
