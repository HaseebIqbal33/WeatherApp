import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>WeatherApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textStyle: {
    color: 'rgb(14, 135, 84)',
    fontWeight: 'bold',
    fontSize: 36,
  },
});

export default SplashScreen;
