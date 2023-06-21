/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { WelcomeScreen, Login, Register, MobileList, ProductGridView } from './screens';

AppRegistry.registerComponent(appName, () => () => <ProductGridView />);
