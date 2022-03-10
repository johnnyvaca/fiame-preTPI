import React from "react";
import {FlatList, Image, Text, View} from "react-native";


export default function DetailsScreen({route}){

    return(
        <View style={{flex:1, width:'100%', backgroundColor:'red'}}>
           <Image  source={route.params.image}  style={{
               width:1000,resizeMode:'cover',flex:2, marginHorizontal:0}}  />
            <View style={{flex:3}} />

        </View>
    )
}
