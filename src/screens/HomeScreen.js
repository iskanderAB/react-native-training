import React from "react";
import {Text, View} from "react-native";
import {StyleSheet} from "react-native" ;
import Screen from "../components/Screen";

const HomeScreen = () => {
    return <View style={styles.view}>
        <Text style={styles.textOne}> child #1 ! </Text>
        <Text style={styles.textTow}> child #2 ! </Text>
        <Text style={styles.textThree}> child #3 ! </Text>
    </View>
};


const styles = StyleSheet.create({
    view: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 2,
        flexDirection: 'column',
        height: 200,
        // alignItems: 'center'


    },
    textOne: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'red',
        // textAlign: 'center',
        top : 10,
        marginTop : 20
        // flex : 1
    },
    textTow: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'red',
        // textAlign: 'center',
        alignSelf : 'stretch',
        position:'absolute',
        width : '100%',
        ...StyleSheet.absoluteFillObject

        // flex : 1
    }
    , textThree: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'red',
        // textAlign: 'center',
        // flex: 2
    }
});

export default HomeScreen;
