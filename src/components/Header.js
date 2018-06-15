import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'grey',
        alignItems: 'center',
        height: 40,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        color: 'black',
        fontSize: 20
    },
});
