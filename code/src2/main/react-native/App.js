import React, {Component, useState} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, Image,
    View,
    TouchableOpacity, Button, TextInput,
} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import Menu from './Gabarit/menu';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Square from "./Square";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={HomeScreen} />
            <Tab.Screen name="Settings2" component={HomeScreen} />
        </Tab.Navigator>
    );
}
const Stack = createNativeStackNavigator(); 

function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen21</Text>
        </View>
    );
}

function App() {
const title  = 'Titre du film'

    const [text, setText] = useState("voici le text");
    return (
            <View style={{backgroundColor: 'green', width : '100%', height : '100%', flexDirection:'row', justifyContent:"space-around", alignItems:'center'}}>



    </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'rgba(219,220,208,0.92)'
    },
    header : {


    }
});
export default App;
