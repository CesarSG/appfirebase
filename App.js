import React from 'react';
import GuestNavigation from "./aplication/navigations/guest";

import firebaseConfig from './aplication/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <GuestNavigation/>
    );
  }
}
