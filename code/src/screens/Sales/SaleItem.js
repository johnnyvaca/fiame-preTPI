
import React, {Fragment} from 'react';
import {Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';

export default function SaleItem({sale}) {

    const _onPress = () => {
        alert("id = " + sale.id)
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={_onPress} style={{flexDirection: 'row', width:'98%', borderWidth:2,borderColor:'#084572',borderRadius:20, alignItems:'center'}}>
                <Image
                    source={sale.image}
                    style={styles.pollo}
                />
                <View>
                    <Text style={styles.title}>{sale.title}</Text>
                    <Text style={styles.title}>{sale.date}</Text>
                    <Text style={styles.title}>{sale.seller}</Text>
                </View>
                <Text style={{fontSize:30,position:'absolute', right:10}}>{sale.price}.-</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',width:'100%'

        ,paddingHorizontal:10,paddingBottom:10
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    unchecked: {width: 56, height: 56, left: 1},
    bin: {width: 56, height: 56, left: 30},
    pollo: {width:150, height:100,marginRight:0}

});
