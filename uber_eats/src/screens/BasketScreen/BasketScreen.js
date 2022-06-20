import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// import restaurants from '../../../assets/data/restaurants.json';
import BasketDishItem from '../../components/BasketDishItem/BasketDishItem';
import { useBasketContext } from '../../context/BasketContext';
import { useOrderContext } from '../../context/OrderContext';

const BasketScreen = () => {
  const navigation = useNavigation()
  const { restaurant, basketDishes, totalPrice } = useBasketContext();
  const { createOrder } = useOrderContext();

  const onCreateOrder = async () => {
    await createOrder()
    navigation.navigate("Restaurants")
  }

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant?.name}</Text>

      <Text style={styles.yourItem}>Your items</Text>

      {/* Items Container */}
      <FlatList
        data={basketDishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
        keyExtractor={(item, index) => index}
      />

      <View style={styles.separator} />

      {/* Button Checkout */}
      <Pressable onPress={onCreateOrder} style={styles.button}>
        <Text style={styles.buttonText}>
          Create Order &#8226; ${totalPrice.toFixed(2)}
        </Text>
      </Pressable>
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
