import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image, TextInput } from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      currentUser: {}
    }
  }

  handleSubmit() {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then((res) => {
        return res.json()
      })
      .then((stats) => {
        this.setState({currentUser: stats})
        this.props.navigation.navigate('My Profile', this.state.currentUser)
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }

  handleUsername(text) {
    this.setState({
      username: text
    })
  }

  handlePassword(text) {
    this.setState({
      password: text
    })
  }

  handleNewSignUp() {
    this.props.navigation.navigate('Signup')
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter your username"
          onChangeText={(text) => {this.handleUsername(text)}}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Enter your password"
          onChangeText={(text) => {this.handlePassword(text)}}
        />
        <Button title='Submit' onPress={() => {this.handleSubmit()}}></Button>
        <Text>Haven't signed up yet?</Text>
        <Button onPress={() => {this.handleNewSignUp()}} title='Sign up here'></Button>
      </View>
    )
  }
};

export default Login;