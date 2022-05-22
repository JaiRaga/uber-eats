import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import restaurants from '../../../assets/data/restaurants.json';
import BasketDishItem from '../../components/BasketDishItem/BasketDishItem';
const restaurant = restaurants[0];

const BasketScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={styles.yourItem}>Your items</Text>

      {/* Items Container */}
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
        keyExtractor={(item, index) => index}
      />

      <View style={styles.separator} />

      {/* Button Checkout */}
      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 30,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
  },
  yourItem: {
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});
