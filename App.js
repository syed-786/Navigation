import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>hhh</Text>
       </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkcyan',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
