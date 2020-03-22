import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class Pannel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,        
            animation: new Animated.Value(0),
            height: 0,
        };
    }

    static defaultProps = {
        title: 'Pannel',
        children: (<View><Text>NO CHILD</Text></View>)
    }

    setHeight = (e) => {
        const { height } = e.nativeEvent.layout

        console.log(height);

        if(height > this.state.height){
            this.setState({
                height: height
            });
        }
    }

    onPressButton = () => {
        console.log(this.state)

        const { height, expanded, animation } = this.state;

        let start = expanded ? height : 0;
        let final = expanded ? 0 : height;

        this.setState({
            expanded: !expanded
        })

        animation.setValue(start);

        Animated.spring(animation,
            {
                toValue: final,
                bounciness: 0
            }
        ).start();
    }

    render() {
        let height = this.state.animation._value ? { height: this.state.animation } : {}

        console.log(height);

        return (
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text>
                        {this.props.title}
                    </Text>
                    <TouchableWithoutFeedback onPress={this.onPressButton}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-arrow-down' : 'md-arrow-down'} size={32} color="green" />
                    </TouchableWithoutFeedback>
                </View>
                <Animated.View style={height}>
                    <View onLayout={(e) => this.setHeight(e)}>
                    {this.props.children}
                    </View>
                </Animated.View>
            </View>
            
        );
    }
}
