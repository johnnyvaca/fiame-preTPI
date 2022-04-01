import React, {useState} from "react";
import {Button, Dimensions, FlatList, Image, StyleSheet, Text, View} from "react-native";
import NumericInput from 'react-native-numeric-input'

export default function DetailsScreen({route}){
    const [ quantity, setQuantity ] = useState(route.params.quantity);
return(
        <View style={styles.container}>
            <View style={{flex:6}} >
                <Image  source={{uri: route.params.img}}  style={styles.coucou} />
            </View>
            <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-around',borderBottomColor:'black0',borderTopColor:'black',borderTopWidth:3,borderBottomWidth:3}} >
                <Text style={styles.textes}>{route.params.name}</Text>
                <Text style={styles.textes}>{route.params.selling_date}</Text>
                <Text style={styles.textes}>{route.params.user_id}</Text>
                <Text style={styles.textes}>{route.params.price}.- CHF</Text>
            </View>
            <View style={{flex:2,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:-10}}>
                <Text style={{fontWeight:"bold",fontSize:20, paddingRight:50}}>Commande</Text>
                <NumericInput
                    type={"up-down"}
                    value={quantity}
                    onChange={ quantity => setQuantity(quantity)}
                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                    totalWidth={100}
                    totalHeight={70}
                    iconSize={25}
                    editable={false}
                    step={1}
                    valueType='integer'
                    rounded
                    textColor='black'
                    iconStyle={{ color: 'black' }}
                    rightButtonBackgroundColor='#EA3788'
                    leftButtonBackgroundColor='#E56B70'
                />
            </View>
            <View style={{flex:1,backgroundColor:'grey',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontWeight:"bold",fontSize:20, paddingRight:50}}>Payés</Text>
                <Text style={{fontWeight:"bold",fontSize:20, paddingRight:50}}>{route.params.paid} plâts</Text>
            </View>
            <View style={{flex:1,backgroundColor:'orange',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontWeight:"bold",fontSize:20, paddingRight:50}}>A Payer</Text>
                <Text style={{fontWeight:"bold",fontSize:20, paddingRight:50}}>{(quantity-route.params.paid)*route.params.price}.- CHF</Text>
            </View>
            <View style={{flex:1,backgroundColor:'grey',flexDirection:'row',alignItems:'center',justifyContent:'space-around',paddingHorizontal:70}}>
                <Button title="Confirmer" />
                <Button title="Annuler" color="red" />

            </View>

        </View>
    )


}

const styles = StyleSheet.create({
    container:{
        flex:3, width:'100%'
    },
    coucou:{
       flex:1,
        width: '100%',
        resizeMode:'contain'
    },
    textes:{
        fontWeight:'bold',
        fontSize:14
    }
})
