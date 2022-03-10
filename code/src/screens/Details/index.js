import React from "react";
import {FlatList, Text, View} from "react-native";



export default function DetailsScreen({route}){

    return(
        <View>
            <Text>{route.params.id}</Text>
        </View>
    )
}
