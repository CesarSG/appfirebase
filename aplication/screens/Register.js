import React, {Component} from 'react';
import {View} from 'react-native';
import BackgroundImage from "../../aplication/components/BackgroundImage";
import AppButton from "../../aplication/components/AppButton";
import {Card} from 'react-native-elements';
import Toast from 'react-native-simple-toast';

import t from 'tcomb-form-native';
const Form = t.form.Form;
import FormValidation from '../utils/validation';
import * as firebase from 'firebase';

export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        email: '',
        password: ''
      }
    };

    this.samePassword = t.refinement(t.String, (s) => {
      return s === this.state.user.password
    });

    this.user = t.struct({
      email: FormValidation.email,
      password: FormValidation.password,
      password_confirmation: this.samePassword
    });

    this.options = {
      fields: {
        email: {
          help: 'Introduce tu email',
          error: 'Email incorrecto',
          autoCapitalize: 'none',
        },
        password: {
          help: 'Introduce tu password',
          error: 'Password incorrecto',
          password: true,
          secureTextEntry: true,
        },
        password_confirmation: {
          help: 'Repite el password',
          error: 'Los password no coincinden',
          password: true,
          secureTextEntry: true,
        }
      }
    };

    this.validate = null;
  }

  register () {
    if(this.validate){

    }
  }

  onChange (user){

  }

  render(){

  }
}
