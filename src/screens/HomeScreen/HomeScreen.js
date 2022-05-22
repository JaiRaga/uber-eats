import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json';

const HomeScreen = () => {
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
