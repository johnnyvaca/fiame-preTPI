import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, Image,
    View,
    TouchableOpacity, Button,
} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import Menu from './Gabarit/menu';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function StackScreen2() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'My home' }}
            />
        </Stack.Navigator>
    );
}
function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen21</Text>
        </View>
    );
}
function tex() {
    return (

            <Text>Home Screen21</Text>

    );
}
class App extends Component {
    render() {
        return (

            <View style={styles.container}>
                <NavigationContainer>
                    <Menu />
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{ title: 'My home' }}
                        />
                    </Stack.Navigator>


                </NavigationContainer>
                <Menu />
            </View>
            /*
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'My home' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

             */
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'rgba(219,220,208,0.92)',

    },
    navbar : {
        position: 'absolute',
        top: '10%',
        left: 0,
        right: 0,
    }
});
export default App;
