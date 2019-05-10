import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class RestaurantEmpty extends Component{
  render(){
    const {text} = this.props;

    return(
      <View style={styles.restauranteEmptyView}>
        <Text style={styles.restauranteEmptyText}>
          {text}
        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  restauranteEmptyView: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  restauranteEmptyText: {
    backgroundColor: 'rgba(161,6,10,0.8)',
    color: 'white',
    textAlign: 'center',
    padding: 20
  }
});
