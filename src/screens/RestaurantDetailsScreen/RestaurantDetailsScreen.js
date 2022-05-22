import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';

import restaurants from '../../../assets/data/restaurants.json';
import Header from './Header';
import DishListItem from '../../components/DishListItem';

import styles from './styles';

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params.id;
  // console.warn(id)

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item, index) => index}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.imageIcon}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
