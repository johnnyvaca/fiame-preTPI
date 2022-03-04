import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Square({title,backgroundColor,height}) {
    return (
        <View style={[{backgroundColor: backgroundColor, height: height},styles.container]}>
            <Text>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {width:50}
})


