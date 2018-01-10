import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#dddd',
        borderBottomWidth: 0,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    }
};

export {Card};