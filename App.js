import React from 'react';
import { View } from 'react-native';

import Header from './src/Header';
import Follower from './src/Follower';
import ListPictures from './src/ListPicture';
import TaskBar from './src/TaskBar';

import styles from './src/Styles';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.emptyHeightSpace} />
      <View style={styles.emptyHeightSpace} />

      <Header></Header>

      <Follower></Follower>

      <ListPictures></ListPictures>

      <TaskBar></TaskBar>
      
    </View >
  );
}
