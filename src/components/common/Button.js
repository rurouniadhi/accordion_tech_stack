import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({onPress, children}) => {
    const {
        buttonStyle,
        buttonTextStyle
    } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonTextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle:{
        padding: 10,
        marginBottom: 5,
        borderRadius: 10,
        borderColor: '#09b753',
        borderWidth: 2,
        alignSelf: 'stretch',
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center'
    },
    buttonTextStyle:{
        color: '#09b753',
        fontSize: 20,
        textAlign: 'center'
    }

}

export {Button};