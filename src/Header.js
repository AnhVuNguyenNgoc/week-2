import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import styles from './Styles';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';

export default function Header() {

    const _onPressButton = () => {
        console.log('work');
        alert('Button follower');
    }

    return (
        <>
            <View style={styles.toolBar}>
                <View style={styles.backIcon}>
                    <Feather name="chevron-left" size={20} color={POLO_BLUE_COLOR} />
                </View>
                <View style={{ flex: 0.85 }} />
                <View style={styles.menuIcon}>
                    <Ionicons name="md-apps" size={20} color={POLO_BLUE_COLOR} />
                </View>
            </View>

            <View style={styles.header}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={require('../assets/avatar.jpg')}
                    />
                </View>
                <View style={styles.inforWrapper}>
                    <Text style={styles.bold}>Anh Vũ</Text>
                    <Text style={styles.textColorGrey}>Developer</Text>
                    <View style={styles.emptyHeightSpace} />
                    <View style={styles.btnWrapper}>

                        <TouchableOpacity style={[styles.btn, styles.btnFollow]} onPress={_onPressButton}>
                            <Text style={styles.textColorWhite}>Follower</Text>
                        </TouchableOpacity>

                        <View style={styles.emptyWidthSpace} />
                        <View style={[styles.btn, styles.btnShare]}>
                            <Ionicons name="md-send" size={15} color='white' />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

