import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import CarouselComponents from './src/components/CarouselComponent.js';
import MenuScreen from './src/screens/MenuScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';

export default class App extends React.Component {
  render() {
    const RootStack = StackNavigator(
      {
        Home: {
          screen: HomeScreen,
        },
        Menu: {
          screen: MenuScreen,
        },
        Carousel: {
          screen: CarouselComponents,
        },
      },
      {
        initialRouteName: 'Home',
        navigationOptions: {
          headerStyle: {
            display: 'none'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
      }
    );
    
    return (
      <RootStack />
    );
  }
}

