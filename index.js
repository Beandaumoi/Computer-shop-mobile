/**
 * @format
 */

import WelcomeScreen from './screens/WelcomeScreen';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

let fakedGames = [
    {
        name: 'GTA',
        year: 2014,
        price: 5000
    },
    {
        name: 'AC',
        year: 2010,
        price: 3000
    },
    {
        name: 'STS',
        year: 2020,
        price: 10000
    }
]
AppRegistry.registerComponent(appName, () => () => <WelcomeScreen
                        x = {5} y = {10}
                        person = {{
                            name: "Manh",
                            age: 20,
                            email: "manh@gmail.com",
                        }}
                        games = {fakedGames}
/>);
