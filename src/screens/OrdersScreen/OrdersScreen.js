import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import OrderListItem from '../../components/OrderListItem/OrderListItem';
import { useOrderContext } from '../../context/OrderContext';

const OrdersScreen = () => {
  const { orders } = useOrderContext();
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // paddingTop: 50,
  },
});
