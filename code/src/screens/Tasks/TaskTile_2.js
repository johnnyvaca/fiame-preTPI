
import React, {Fragment} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

export default function TaskTile() {

  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', width:'98%', borderWidth:2,borderColor:'#084572',borderRadius:20, alignItems:'center'}}>
            <Image
                source={require('../../../assets/icons/pollo.png')}
                style={styles.pollo}
            />
        <View >
        <Text style={styles.title}>pollo kfc</Text>
        <Text style={styles.title}>12.03.2022</Text>
        <Text style={styles.title}>Johnny Vaca</Text>
        </View>
        <Text style={{fontSize:30,position:'absolute', right:10}}>100.-</Text>
        </View>
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
