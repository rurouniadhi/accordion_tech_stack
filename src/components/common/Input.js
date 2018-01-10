import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const {inputStyle, labelStyle, containerStyle} = styles;

    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles={
    inputStyle:{
        color:'#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 20,
        flex: 1,
        height: 50,
        alignSelf: 'stretch',
    },
    labelStyle:{
        fontSize: 15,
        flex: 1,
        color: '#232323'
    },
    containerStyle:{
        height: 60,
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20
    }
};
export {Input};