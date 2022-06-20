import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Restaurant, Dish } from '../../models';
// Components
import Header from './Header';
import DishListItem from '../../components/DishListItem';
import { useBasketContext } from '../../context/BasketContext';

// Styles
import styles from './styles';

const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params.id;

  const {
    setRestaurant: setBasketRestaurant,
    basket,
    basketDishes,
  } = useBasketContext();

  useEffect(() => {
    if (!id) {
      return;
    }
    // clear the previous restaurant details
    setBasketRestaurant(null);

    // fetch restaurant with the id
    DataStore.query(Restaurant, id).then(setRestaurant);
    // fetch the dishes with restaurant id equal to id received as params
    DataStore.query(Dish, (dish) => dish.restaurantID('eq', id)).then(
      setDishes
    );
  }, [id]);

  useEffect(() => {
    setBasketRestaurant(restaurant);
  }, [restaurant]);

  if (!restaurant) {
    return (
      <ActivityIndicator
        size={'large'}
        color="black"
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      />
    );
  }

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={dishes}
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
      {basket && (
        <Pressable
          onPress={() => navigation.navigate('Basket')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Open Basket ({basketDishes.length})
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RestaurantDetailsScreen;
