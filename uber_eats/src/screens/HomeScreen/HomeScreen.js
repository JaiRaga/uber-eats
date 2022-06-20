import { View, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import RestaurantItem from '../../components/RestaurantItem';
import { DataStore } from 'aws-amplify';
import { Restaurant } from '../../models';

// import restaurants from '../../../assets/data/restaurants.json';

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);

  // const fetchRestaurants = async () => {
  //   const results = await DataStore.query(Restaurant)
  //   setRestaurants(results)
  // }

  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
    // fetchRestaurants()
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
