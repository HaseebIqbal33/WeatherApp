import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {HomeScreen, SplashScreen} from './src/components';

const App = () => {
  const [timePass, setTimePass] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimePassed();
    }, 5000);
  }, []);

  const setTimePassed = () => {
    setTimePass(true);
  };

  return (
    <View style={styles.container}>
      {!timePass ? <SplashScreen /> : <HomeScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default App;
