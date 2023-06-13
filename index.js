/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { WelcomeScreen, Login, Register, MobileList } from './screens';

AppRegistry.registerComponent(appName, () => () => <MobileList />);
