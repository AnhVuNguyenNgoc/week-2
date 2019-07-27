import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './Styles';

const imgData = [
    { id: 1, imgSource: require('../assets/1.jpg') },
    { id: 2, imgSource: require('../assets/2.jpg') },
    { id: 3, imgSource: require('../assets/3.png') },
    { id: 4, imgSource: require('../assets/1.jpg') },
    { id: 5, imgSource: require('../assets/2.jpg') },
    { id: 6, imgSource: require('../assets/3.png') },
    { id: 7, imgSource: require('../assets/3.png') },
    { id: 8, imgSource: require('../assets/3.png') },
];

const centerImages = Math.floor(imgData.length / 2);

export default function ListPictures() {

    return (
        <View style={styles.pictures}>
            <ScrollView contentContainerStyle={{ flexDirection: 'row' }} >
                <View style={styles.picturesWrapper} key='leftPictures'>

                    {imgData.slice(0, centerImages).map(item => {
                        return (
                            <>
                                <Image
                                    key={item.key}
                                    style={styles.picture}
                                    source={item.imgSource}
                                />
                                <View  key={item.key} style={styles.emptyHeightSpace} />
                            </>
                        );
                    })}
                </View>
                <View style={styles.picturesWrapper} key='rightPictures'>

                    {imgData.slice(centerImages).map(item => {
                        return (
                            <>
                                <Image
                                    key={item.key}
                                    style={styles.picture}
                                    source={item.imgSource}
                                />
                                <View  key={item.key} style={styles.emptyHeightSpace} />
                            </>
                        );
                    })}

                </View>

            </ScrollView>
        </View>
    );
}

