import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/DishListItem';
import styles from './styles';

const DEFAULT_IMAGE =
  'https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: restaurant.image.startsWith('http')
            ? restaurant.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;
