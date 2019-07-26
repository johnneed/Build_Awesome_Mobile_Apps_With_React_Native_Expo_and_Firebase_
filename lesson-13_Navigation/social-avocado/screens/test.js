import React, {Component} from 'react';
 
import {
    StyleSheet, Text,  View
} from 'react-native';
 
 import common from '../styles/common';
const styles = StyleSheet.create(common);



class Test extends Component  {

 
 

    constructor(props) {
        super(props);
    }

 

    render() {
        return (
          
                <View style={styles.container}>
                <Text style={{fontSize: 100}}>FOO BAR</Text>
                </View>
       
        );
    }
}

 
export default Test;