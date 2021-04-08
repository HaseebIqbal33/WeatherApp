import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Container, Text, List, Left, Right, ListItem} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {BASE_URL, WEATHER_API_KEY} from '../utils/constants';

const ListScreen = () => {
  const [cities, setCities] = useState([]);
  const navigation = useNavigation();

  useEffect(async () => {
    try {
      let response = await fetch(
        `${BASE_URL}/find?lat=23.68&lon=90.35&cnt=50&units=metric&appid=${WEATHER_API_KEY}`,
      );
      let json = await response.json();
      console.log(json.list);
      setCities(json.list);
      return json;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const renderMap = city => {
    console.log(city);
    navigation.navigate('Map', {city});
  };

  return (
    <Container>
      <List>
        <ScrollView>
          {cities &&
            cities.map((city, index) => (
              <ListItem key={index} onPress={() => renderMap(city)}>
                <Left>
                  <Text style={styles.title}>
                    {`${city.name}\n\n`}
                    <Text>{`${city.weather[0].main}`}</Text>
                  </Text>
                </Left>
                <Right>
                  <Text style={styles.temperatur}>{city.main.temp}&deg;c</Text>
                </Right>
              </ListItem>
            ))}
        </ScrollView>
      </List>
    </Container>
  );
};

const styles = StyleSheet.create({
  temperatur: {
    fontSize: 32,
    fontWeight: '900',
  },
  title: {
    fontSize: 20,
  },
});

export default ListScreen;
