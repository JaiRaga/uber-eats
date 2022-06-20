import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BasketDishItem = ({ basketDish }) => {
  console.log(basketDish)
  const { Dish, quantity } = basketDish;
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{quantity}</Text>
      </View>
      <Text style={styles.itemName}>{Dish.name}</Text>
      <Text style={styles.price}>${Dish.price}</Text>
    </View>
  );
};

export default BasketDishItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    // marginHorizontal: 7
  },
  quantityContainer: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 2,
  },
  itemName: {
    fontWeight: '600',
  },
  price: {
    marginLeft: 'auto',
  },
});
