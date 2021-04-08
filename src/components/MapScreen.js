import React from 'react';
import {View, Text} from 'react-native';

const MapScreen = ({route}) => {
  const {city} = route.params;
  return (
    <View>
      <Text>{city.name}</Text>
    </View>
  );
};

export default MapScreen;
