import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth, DataStore } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';

import { User } from '../../models';
import { useAuthContext } from '../../context/AuthContext';

const Profile = () => {
  const navigation = useNavigation()
  const { sub, dbUser, setDbUser } = useAuthContext();

  const [name, setName] = useState(dbUser?.name || '');
  const [address, setAddress] = useState(dbUser?.address || '');
  const [lat, setLat] = useState(dbUser?.lat.toString() || '0');
  const [lng, setLng] = useState(dbUser?.lng.toString() || '0');

  const onSave = async () => {
    if (dbUser) {
      await updateUser();
    } else {
      await createUser();
    }
    navigation.goBack()
  };

  const updateUser = async () => {
    const user = await DataStore.save(
      User.copyOf(dbUser, (updated) => {
        updated.name = name;
        updated.address = address;
        updated.lat = parseFloat(lat);
        updated.lng = parseFloat(lng);
      })
    );
    setDbUser(user)
  };

  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new User({
          name,
          address,
          lat: parseFloat(lat),
          lng: parseFloat(lng),
          sub,
        })
      );
      console.log(user);
      setDbUser(user);
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <Button onPress={onSave} title="Save" />
      <Button onPress={() => Auth.signOut()} title="Sign out" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
});

export default Profile;
