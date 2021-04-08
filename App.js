import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

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
    <SafeAreaView style={styles.container}>
      {!timePass ? <SplashScreen /> : <HomeScreen />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
