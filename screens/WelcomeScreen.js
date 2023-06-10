import React from "react";
import {Text, View} from "react-native";
//component = function
// Create a variable which reference to a function
import { sum2number, sub2number, PI } from "../utilies/Caculator";
//read objects, variable, functions from other modules
const WelcomeScreen = (props) => {
    //destructuring
    const {x,y} = props
    const {person} = props
    const {name, age, email} = person
    const {games} = props
    //const => let => var
    /*If have 2 or more than 1 Text, we need to add View which wraps 
    the text*/
    return <View style={{

    }}>
        <Text>Value of x = {x}, Value of y = {y}</Text>
        <Text>Name: {name}, Age:{age}, Email:{email}</Text>
        {games.map(game => <Text>
            {game.name}, {game.year}, {game.price}
        </Text>)}
        <Text>Tổng 2 và 3 = {sum2number(2,3)}</Text>
        <Text>Hiệu 10 và 8 = {sub2number(10, 8)}</Text>
        <Text>PI = {PI}</Text>
    </View>
}

export default WelcomeScreen;