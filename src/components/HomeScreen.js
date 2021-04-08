import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from './ListScreen';
import MapScreen from './MapScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'green'},
        }}>
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            title: 'Weather app',
          }}
        />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
