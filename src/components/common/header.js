//import library
import React from 'react';
import { Text, View } from 'react-native';
//create component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#73fb84',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        position: 'relative',
        elevation: 2
    },
    textStyle: {
        fontSize: 30,
        color: '#000'
    }
};
//make it available for other part
export  {Header}; 