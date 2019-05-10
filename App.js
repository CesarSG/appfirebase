import React from 'react';
import {Text} from 'react-native-elements';
import GuestNavigation from "./aplication/navigations/guest";
import PreLoader from "./aplication/components/PreLoader";
import RestaurantEmpty from "./aplication/components/Restaurant/RestaurantEmpty";

import firebaseConfig from './aplication/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isLogged: false,
      loaded: false
    }
  }

  async componentDidMount (){
    await firebase.auth().onAuthStateChanged((user) => {
      if(user !== null){
        this.setState({
          isLogged: true,
          loaded: true
        });
      } else {
        his.setState({
          isLogged: false,
          loaded: true
        });
      }
    })
  }

  render() {
    const {isLogged, loaded} = this.state;

    if (! loaded){
      return (<PreLoader/>);
    }
    if(isLogged){
      return (<RestaurantEmpty text="No hay restaurantes disponibles"/>);
    } else {
      return (<GuestNavigation/>);
    }
  }
}
