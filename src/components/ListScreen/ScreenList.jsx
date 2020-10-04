import React from 'react';
import {StyleSheet, Text, View,FlatList} from "react-native";

const ListScreen = () => {
    const items = [
        {
            name : 'iskander'
        },{
            name : 'khaled'
        },
        {
            name : 'mouin'
        }
    ]


    return <FlatList
        horizontal
        data={items}
        renderItem={()=> <Text> hemmp </Text>}
        keyExtractor={(item) => item.name}
      />;
}
const style = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        color: 'red'
    }
});
export default ListScreen ;
