import React from "react";
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from "react-native";
let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;
export default function DetailsScreen({route}){


    return(
        <View style={styles.container}>
            <View style={{flex:5, backgroundColor:'red'}} >
                <Image  source={route.params.image}  style={styles.coucou} />

            </View>
            <View style={{flex:5}} />
        </View>
    )


}

const styles = StyleSheet.create({
    container:{
        flex:3, width:'100%', backgroundColor:'red'
    },
    coucou:{
        backgroundColor:'white',
       flex:1,
        width: '100%',
        resizeMode:'contain'
    }
})
