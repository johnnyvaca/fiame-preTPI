import React from "react";
import {Button, Text, View} from 'react-native'


function Home({navigation}) {
    return (
        <View>
            <Button title="Switch to menu" onPress={() =>
                navigation.navigate("Menu")} >
            </Button>
        </View>
    );
}

export default Home;
