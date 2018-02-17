import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
    Button,
    View,
    Text
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 50}}>Home Screen</Text>
        <Button
          title="Go to Menu"
          onPress={() => this.props.navigation.navigate('Menu')}
        />
      </View>
    );
  }
}
