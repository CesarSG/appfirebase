import React, {Component} from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import sliderTemplate from './templates/slider';


export const Restaurant = t.struct({
  name: t.String,
  address: t.String,
  capacity: t.String,
  description: t.String
});

export const options = {
  fields: {
    name: {
      label: 'Nombre (*)',
      placeholder: 'Nombre'
    },
    address: {
      label: 'Direccion (*)',
      placeholder: 'Direccion'
    },
    capacity: {
      label: 'Capacidad',
      placeholder: 'Capacidad en personas',
      config: {
        step: 1,
        max: 100,
        min: 1
      },
      template: sliderTemplate
    },
    description: {
      label: 'Descripcion (*)',
      placeholder: 'Descripcion',
      multiline: true,
      stylesheet: {
        ...Form.stylesheet,
        textbox: {
          ...Form.stylesheet.textbox,
          normal: {
            ...Form.stylesheet.textbox.normal,
            height: 150
          },
          error: {
            ...Form.stylesheet.textbox.error,
            height: 150
          }
        }
      }
    }
  }
}
