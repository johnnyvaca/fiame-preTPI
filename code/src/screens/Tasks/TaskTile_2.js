
import React, {Fragment} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

export default function TaskTile({image,nom,date,vendeur,prix}) {

  return (
    <View style={styles.container}>
        <Image
            source={require('../../../assets/icons/pollo.png')}
            style={styles.pollo}
        />
        <View >
      <Text style={styles.title}>{nom}</Text>
      <Text style={styles.title}>{date}</Text>
      <Text style={styles.title}>{vendeur}</Text>
        </View>
        <Text style={{fontSize:30,left:30}}>{prix}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unchecked: {width: 56, height: 56, left: 1},
  bin: {width: 56, height: 56, left: 30},
  pollo: {width:150, height:100,marginRight:0}

});
