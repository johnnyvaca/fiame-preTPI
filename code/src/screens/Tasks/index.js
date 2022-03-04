import React, {useState, Fragment} from 'react';
import {DatePickerAndroid, FlatList, Text, View} from 'react-native';
import Header from '../../components/Header';
import TaskTile from './TaskTile';
import TaskForm from './TaskForm';
export default function TasksScreen() {
  //Liste des taches
  //State pour garder en mémoire les taches
  const [tasks, setTasks] = useState([
    {title: 'hello world', isCompleted: false},
  ]);

  // item = {title: "hello world", isCompleted: falseS}
  const renderItem = ({item}) => {
    return <View>
      <TaskTile task={item} />
      <TaskTile task={item2} />
      <TaskTile task={item} /></View>;
  };

  // Ajouter une fonction pour ajouter une tache au state
  // Passer cette fonction à notre form
  const onAddTask = title => {
    setTasks([...tasks, {id: Date.now(), title, isCompleted: false}]);
  };

  // 2x TaskCounter => props nb et title
  // TasksisList => return FlatList = TaskTitle

  return (
    <FlatList

      ListHeaderComponent={

        <Fragment>
          {/*
          <Header />
          <TaskForm onAddTask={onAddTask} />
          */}
        </Fragment>
      }
      contentContainerStyle={{flexGrow: 1}}
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}
