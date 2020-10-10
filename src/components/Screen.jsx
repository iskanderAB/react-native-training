import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';


const Screen = (props) => {
    console.log(props.navigation)
    return (
        <View>
            <Text style={style.textStyle}> Hello coders </Text>
            <Button style={style.textStyle}
                    title="go to demo "
                    onPress={() => props.navigation.navigate('Home')}
            />
            <TouchableOpacity onPress={() => console.log("Hello !")}>
                <Text> go to another page!</Text>
                <Text> go out </Text>
            </TouchableOpacity>
            <Text onPress={() => console.log("iskander")}> Iskander </Text>
        </View>
    );
}
const style = StyleSheet.create({
    textStyle: {
        fontSize: 80,
        backgroundColor: 'red'
    }
});
export default Screen;
