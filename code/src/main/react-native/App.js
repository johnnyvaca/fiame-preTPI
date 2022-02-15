// In App.js in a new project
/*
import * as React from 'react';
import Gabarit from './Gabarit';
import {View} from "react-native";


const App = () => {
    return (
        <View>
            <Gabarit />
        </View>
    );
}

export default App;


*/

// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen21</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview111'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Overview2'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
