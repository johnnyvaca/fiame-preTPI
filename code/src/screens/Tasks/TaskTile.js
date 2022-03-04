import React, {Fragment} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

export default function TaskTile({task}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icons/icon_circle_unchecked.png')}
        style={styles.unchecked}
      />
      <Text style={styles.title}>{task.title}</Text>

      <Image
        source={require('../../../assets/icons/icon_bin.png')}
        style={styles.bin}
      />
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
    backgroundColor: 'red',
  },
  unchecked: {width: 56, height: 56, left: 1},
  bin: {width: 56, height: 56, position: 'absolute', right: 1},
  title: {position: 'relative', left: 10},
});
