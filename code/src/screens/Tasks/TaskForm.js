import React, {Fragment, useState} from 'react';
import {TextInput, StyleSheet, Button, View} from 'react-native';

export default function TaskForm({onAddTask}) {
  const [newTitle, setNewTitle] = useState('');
  const onChangeText = val => {
    setNewTitle(val);
  };
  const onAddNewTask = () => {
    if (newTitle === '') {
      return;
    }
    onAddTask(newTitle);
    setNewTitle('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Nouvelle Tache"
      />
      <Button title="hello" onPress={onAddNewTask} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: '70%',
    height: 40,
  },
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
