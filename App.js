import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import InstaScreen from './Screens/InstaScreen';
import FacebookScreen from './Screens/FacebookScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer></AppContainer>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  facebook: {screen:FacebookScreen},
  instag: {screen:InstaScreen}
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
