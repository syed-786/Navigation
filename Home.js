import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={StyleSheet.container1}>
        <Text>Hello Home</Text>

      </View>
    );
  }
}

export default Home;

const style=StyleSheet.create({
container1:{
    backgroundColor: "cyan"
}
});