/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationBar} from "navigationbar-react-native";
import {NavigationContainer} from "@react-navigation/native";
import TopTabs from "./src/navigation/TopTabs";
const Tab = createMaterialTopTabNavigator();



const App = () => {
  return (
    <SafeAreaView style={{flex: 1,}}>
        <View style={{flex:1}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Fiame</Text>
        </View>
        <View style={{flex:3}}>
            <NavigationContainer>
                <TopTabs />
            </NavigationContainer>
        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  a: {},
});

export default App;
//
