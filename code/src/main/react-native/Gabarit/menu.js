import * as React from 'react';
import {Button,View} from "react-native";

const Menu = ({navigation}) => {
    return (
        <View>
            <Button title="Switch to home" onPress={() =>
                navigation.navigate("Home")} >
            </Button>
        </View>
    );
}

export default Menu;
