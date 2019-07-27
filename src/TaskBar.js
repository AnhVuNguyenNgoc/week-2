import React from 'react';
import { View } from 'react-native';
import styles from './Styles';
import { Feather } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';

export default function TaskBar() {

    return (
        <View style={styles.taskBar}>
            <Feather name="settings" size={20} color={POLO_BLUE_COLOR} />
            <Feather name="plus-circle" size={20} color={POLO_BLUE_COLOR} />
            <Feather name="user" size={20} color={POLO_BLUE_COLOR} />
        </View>
    );
}

