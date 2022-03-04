import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../Home/home";
import Menu from "./menu";

const Stack = createNativeStackNavigator();
const Gabarit = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Menu' component={Menu} options={{ title: 'Overview1' }}/>
                <Stack.Screen name='Home' component={Home} options={{ title: 'Overview222' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Gabarit;
