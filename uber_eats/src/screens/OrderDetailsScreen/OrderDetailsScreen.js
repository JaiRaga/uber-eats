import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';

import styles from './styles';
import BasketDishItem from '../../components/BasketDishItem/BasketDishItem';
import { useOrderContext } from '../../context/OrderContext';

const order = orders[0];

const OrderDetailsHeader = ({ order }) => {
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
  const [order, setOrder] = useState(null);
  const [orderDishItems, setOrderDishItems] = useState([])
  const { getOrder } = useOrderContext();
  const route = useRoute();
  const id = route.params?.id;

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, []);

  if (!order) {
    return <ActivityIndicator size="large" color="green" />;
  }

  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      data={order.dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      keyExtractor={(item, index) => index}
    />
  );
};

export default OrderDetailsScreen;
