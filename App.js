import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Deck from './deckOfCards.js';
import GameOverview from './GameOverview.js';
import Options from './Options.js';
import MyProfile from './MyProfile.js';
import Home from './Home';
import Rules from './Rules';
import Login from './Login';
import Signup from './Signup';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            style={styles.buttonContainer}
            name='Home'
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            style={styles.buttonContainer}
            name='New Game'
            component={GameOverview}
            options={{ title: 'Exit Game' }}
          />
          <Stack.Screen
            style={styles.buttonContainer}
            name='Options'
            component={Options}
            options={{ title: 'Return home' }}
          />
          <Stack.Screen
            style={styles.buttonContainer}
            name='Login'
            component={Login}
            options={{ title: 'Return home' }}
          />
          <Stack.Screen
            style={styles.buttonContainer}
            name='Signup'
            component={Signup}
            options={{ title: 'Return home' }}
          />
          <Stack.Screen
            style={styles.buttonContainer}
            name='My Profile'
            component={MyProfile}
            options={{ title: 'Return home' }}
          />
          <Stack.Screen
            style={styles.buttonContainer}
            name='Rules'
            component={Rules}
            options={{ title: 'Return home' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 300,
    height: 100
  }
});

/* <FlatList
data={this.state.currentDeck}
renderItem={({item}) => <Text>{item.suit}</Text>}>
</FlatList> */