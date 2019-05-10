import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BackgroundImage from "../../aplication/components/BackgroundImage";
import AppButton from "../../aplication/components/AppButton";
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';

export default class Start extends Component {
  static navigationOptions = {
    title: 'Expo App'
  };

  login(){
      const navigateAction = NavigationActions.navigate({
        routeName: 'Login'
      });
      this.props.navigation.dispatch(navigateAction)
  }

  register(){
    const navigateAction = NavigationActions.navigate({
      routeName: 'Register'
    });
    this.props.navigation.dispatch(navigateAction)
  }

  async facebook(){

  }

  render(){
    return(
      <BackgroundImage source={require('../../assets/images/bg-image.jpg')}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <AppButton
            bgColor="rgba(247, 27, 27, 0.9)"
            title="Entrar  "
            action={this.login.bind(this)}
            iconName="sign-in"
            iconSize={30}
            iconColor="#fff"
          />
          <AppButton
            bgColor="rgba(66, 66, 66, 0.9)"
            title="Registrarme  "
            action={this.register.bind(this)}
            iconName="user-plus"
            iconSize={30}
            iconColor="#fff"
          />
          <AppButton
            bgColor="rgba(67, 67, 146, 0.9)"
            title="Facebook  "
            action={this.facebook.bind(this)}
            iconName="facebook"
            iconSize={30}
            iconColor="#fff"
          />
        </View>
      </BackgroundImage>
    );
  }
}
