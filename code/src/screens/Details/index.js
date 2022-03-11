import React from "react";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";


export default function DetailsScreen({route}){

    return(
        <View style={styles.container}>
            <View style={{flex:3, backgroundColor:'red'}} >
                <Image  source={route.params.image}  style={styles.coucou} />
            </View>
            <View style={{flex:5}} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1, width:'100%', backgroundColor:'yellow'
    },
    coucou:{
        backgroundColor:'blue',
        width:'100%',
        height:'100%',
    }
})