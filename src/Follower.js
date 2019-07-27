import React from 'react';
import { Text, View  } from 'react-native';
import styles from './Styles';

export default function Header() {

    return (
        <View style={styles.follower}>

        <View style={styles.countWrapper}>
          <Text style={styles.bold}>10</Text>
          <Text style={styles.textColorGrey}>Project</Text>
        </View>
        <View style={styles.countWrapper}>
          <Text style={styles.bold}>200K</Text>
          <Text style={styles.textColorGrey}>Follower</Text>
        </View>
        <View style={styles.countWrapper}>
          <Text style={styles.bold}>200K</Text>
          <Text style={styles.textColorGrey}>Following</Text>
        </View>

      </View>
    );
}

