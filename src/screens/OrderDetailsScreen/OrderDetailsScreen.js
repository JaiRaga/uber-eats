import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';

import styles from './styles';
import BasketDishItem from '../../components/BasketDishItem/BasketDishItem';

const order = orders[0];

const OrderDetailsHeader = () => {
  console.log(order);
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
          <Text style={styles.menuTitle}>Your Orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetailsScreen = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      keyExtractor={(item, index) => index}
    />
  );
};

export default OrderDetailsScreen;