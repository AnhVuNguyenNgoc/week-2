import { StyleSheet } from 'react-native';

const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

export default StyleSheet.create({
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
        height: 150,
        width: 155,
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
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    countWrapper: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    pictures: {
        flex: 0.55,
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