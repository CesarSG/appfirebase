import React from 'react';
import {View, Text, Slider} from 'react-native';

export default sliderTemplate = (locals) => {
  const help = (
    <Text style={{margiBottom: 8}}>{locals.help}</Text>
  );

  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>
        {locals.label} ({parseInt(locals.value)})
      </Text>
      <Slider
        ref="imput"
        step={locals.config.step}
        minimumValue={locals.config.min}
        maximumValue={locals.config.max}
        value={parseInt(locals.value)}
        onValueChange={value => locals.onChange(value)}
      />
      {help}
    </View>
  )
}
