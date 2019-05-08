import React from 'react';
import { Text, View } from 'react-native';
import AppButton from "./aplication/components/AppButton";
import PreLoader from "./aplication/components/PreLoader";
import BackgroundImage from "./aplication/components/BackgroundImage";
import Start from "./aplication/screens/Start";
import firebaseConfig from './aplication/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);



export default class App extends React.Component {
  render() {
    return (
      <BackgroundImage
        source={require('./assets/images/bg-image.jpg')}
      >
        <Start/>
      </BackgroundImage>
    );
  }
}
