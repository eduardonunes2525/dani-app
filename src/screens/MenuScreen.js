import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
    Button,
    View,
    Text
} from 'react-native';

export default class MenuScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 50}}>Menu Screen</Text>
            <Button
                title="Ano 1"
                onPress={() => this.props.navigation.navigate('Carousel')}
            />
            <Button
                title="Ano 2"
                onPress={() => this.props.navigation.navigate('Carousel')}
            />
            <Button
                title="Ano 3"
                onPress={() => this.props.navigation.navigate('Carousel')}
            />
        </View>
      );
    }
}
  
