import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Dimensions
} from 'react-native';


let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
/**
 * 
 */
export class Page extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('zhuangtai',StatusBar.currentHeight)
        return (
            <View style={this.props.style}>
                <StatusBar/>
                <View style={{height:StatusBar.currentHeight||20}}></View>
                {this.props.children}
            </View>
        );
    }
}