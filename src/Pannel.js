import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Animated, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class Pannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> Pannel </Text>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-caretdown' : 'md-caretdown'} size={32} color="green" />
            </View>
        );
    }
}
