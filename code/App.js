/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationContainer, useRoute} from "@react-navigation/native";
import TopTabs from "./src/navigation/TopTabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailsScreen from "./src/screens/Details";

const Stack = createNativeStackNavigator()

const Header = () => {
    return (
        <View style={{flex:1,paddingTop:10}}>
            <Text style={{fontSize:30, fontWeight:'bold',}}>Fiame</Text>
            <Image
                source={require('./assets/icons/user.png')}
                style={styles.a}
            />
        </View>
    )
}

const App = () => {
  return (
    <SafeAreaView style={{flex: 1,}}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={TopTabs}
                    options={{headerTitle:() =>
                            <View style={{flex:1,paddingTop:10}}>
                                <Text style={{fontSize:30, fontWeight:'bold', flexDirection:'row',width: 100, marginHorizontal:140}}>Fiame</Text>
                                <Image
                                    source={require('./assets/icons/user.png')}
                                    style={styles.a}
                                />
                            </View>
                             }}
                />
                <Stack.Screen name="Details" component={DetailsScreen} options={({route}) => ({
                    title: route.params.title
                })} />

            </Stack.Navigator>
        </NavigationContainer>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  a: {width:45,height:45,position:'absolute', right:10,marginTop:5,marginRight:20},
});

export default App;
