import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleArea: {
    flex: 1,
    marginTop: 100,
  },
  inputArea: {
    flex: 3,
    width: 400,
    justifyContent: 'center',
  },
  buttonsArea: {
    flex: 3,
    width: 400,
    alignItems: 'center',
  },
  input: {
    color: 'white',
    height: 40,
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#3f89e2',
  },
  button: {
    marginTop: 10,
    padding: 10,
    width: 200,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#fff',
    backgroundColor: '#3f89e2',
  },
  indicator: {
    marginTop: 10,
    paddingLeft: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

class flexbox extends Component {
  constructor(props) {
    super(props);
    this.state = { animating: false };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Text>LOGIN APP</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Login"
            onChangeText={(login) => this.setState({ login })}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <View style={styles.buttonsArea}>

          <TouchableHighlight style={styles.button} onPress={this.login}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableHighlight>

          <Text>Forgot your password?</Text>
          <ActivityIndicator
            animating={this.state.animating}
            size="large"
          />

        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('flexbox', () => flexbox);
