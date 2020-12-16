import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image, TextInput } from 'react-native';

import * as firebase from 'firebase/app'

const { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId,
 appId } = require('./config.js');

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

firebase.initializeApp(firebaseConfig);

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }



  handleSubmit() {
    fetch('http://localhost:3000/signup', {
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
        console.log(res)
        this.props.navigation.navigate('My Profile')
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
          placeholder="Create a username"
          onChangeText={(text) => {this.handleUsername(text)}}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Create a password"
          onChangeText={(text) => {this.handlePassword(text)}}
        />
        <Button title='Submit' onPress={() => {this.handleSubmit()}}></Button>
      </View>
    )
  }
};

export default Signup;