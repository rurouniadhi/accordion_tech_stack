import React, {Component} from 'react';
import {
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation,
    UIManager,
    Platform
    } from 'react-native';
import { connect } from "react-redux";
import {CardSection} from './common';
import * as actions from '../actions';

class ListItem extends Component{
    constructor(){
        super();
        if(Platform.OS === 'android'){
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true); 
        }
    }

    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription(){
        const { library, expanded } = this.props;

        if(expanded){
            return (
                <Text style={styles.descStyle}>{library.description}</Text>
            );
        }
    }

    render(){
        const {titleStyle} = styles;
        const {id, title} = this.props.library; 

        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    <CardSection>
                        {this.renderDescription()}
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles={
    titleStyle:{
        fontSize: 20,
        paddingLeft: 15,
        paddingBottom: 10,
        color: '#000'
    },
    descStyle:{
        fontSize: 15,
        color: '#000',
        paddingLeft: 30,
        paddingRight: 30,
        lineHeight: 30
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);