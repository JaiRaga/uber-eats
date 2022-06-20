import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Order', { id: order.id })}
      style={styles.container}
    >
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View>
        <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
        <Text style={styles.orderDetails}>3 items &#8226; $38.45</Text>
        <Text style={styles.orderStatus}>
          2 days ago &#8226; {order.status}
        </Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 5,
  },
  restaurantName: {
    fontWeight: '600',
    fontSize: 16,
  },
  orderDetails: {
    marginVertical: 5,
  },
  orderStatus: {
    // fontWeight: "bold"
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
});
