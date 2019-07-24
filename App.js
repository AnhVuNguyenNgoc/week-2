import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.png') },
  { id: 4, imgSource: require('./assets/1.jpg') },
  { id: 5, imgSource: require('./assets/2.jpg') },
  { id: 6, imgSource: require('./assets/3.png') },
  { id: 7, imgSource: require('./assets/3.png') },
  { id: 8, imgSource: require('./assets/3.png') },
];

const centerImages = Math.floor(imgData.length / 2);

export default function App() {

  const _onPressButton = () => {
    console.log('work');
  }

  return (
    <View style={styles.container}>
      <View style={styles.emptyHeightSpace} />
      <View style={styles.emptyHeightSpace} />

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
            source={require('./assets/avatar.jpg')}
          />
        </View>
        <View style={styles.inforWrapper}>
          <Text style={styles.bold}>Anh Vũ</Text>
          <Text style={styles.textColorGrey}>Developer</Text>
          <View style={styles.emptyHeightSpace} />
          <View style={styles.btnWrapper}>
           
            <TouchableOpacity style={[styles.btn, styles.btnFollow]} onPress={this._onPressButton}>
              <Text style={styles.textColorWhite}>Follower</Text>
            </TouchableOpacity>

            <View style={styles.emptyWidthSpace} />
            <View style={[styles.btn, styles.btnShare]}>
              <Ionicons name="md-send" size={15} color='white' />
            </View>
          </View>
        </View>

      </View>
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

      <View style={styles.pictures}>
        <ScrollView contentContainerStyle={{ flexDirection: 'row' }} >
          <View style={styles.picturesWrapper}>

            {imgData.slice(0, centerImages).map(item => {
              return (
                <>
                  <Image
                    key={item.key}
                    style={styles.picture}
                    source={item.imgSource}
                  />
                  <View style={styles.emptyHeightSpace} />
                </>
              );
            })}
          </View>
          <View style={styles.picturesWrapper}>

            {imgData.slice(centerImages).map(item => {
              return (
                <>
                  <Image
                    key={item.key}
                    style={styles.picture}
                    source={item.imgSource}
                  />
                  <View style={styles.emptyHeightSpace} />
                </>
              );
            })}

          </View>

        </ScrollView>
      </View>

      <View style={styles.taskBar}>
        <Feather name="settings" size={20} color={POLO_BLUE_COLOR} />
        <Feather name="plus-circle" size={20} color={POLO_BLUE_COLOR} />
        <Feather name="user" size={20} color={POLO_BLUE_COLOR} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // justifyContent: 'space-around',

    // fullhd => pixel khác , 4k pixel khác
  },
  emptyWidthSpace: {
    width: 10
  },
  emptyHeightSpace: {
    height: 10
  },
  textColorWhite: {
    color: 'white'
  },
  textColorGrey: {
    color: '#808080'
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20
  },
  toolBar: {
    flex: 0.05,
    flexDirection: 'row'
  },
  backIcon: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  imageWrapper: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  picture: {
    height:150,
    width: 140,
    borderRadius: 15
  },
  inforWrapper: {
    flex: 0.6,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  btn: {
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnFollow: {
    width: 100,
    color: 'white',
    backgroundColor: FOLLOW_COLOR
  },
  btnShare: {
    width: 50,
    backgroundColor: SEND_MESSAGE_COLOR,
  },
  follower: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  countWrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  pictures: {
    flex: 0.5,
    flexDirection: 'row',
  },
  picturesWrapper: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  taskBar: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

});
