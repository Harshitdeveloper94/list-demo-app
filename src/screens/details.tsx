import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {RootStackParamList} from '../types';
import {color} from '../constant/color';
import {RootNavigationProp} from '../navigation/stackNavigation';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation<RootNavigationProp>();
  const {product} = route.params;

  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{product.name}</Text>
        <Text>Brand: {product.brand}</Text>
        <Text>Price: Rs. {product.price}</Text>
        <Text>Category: {product.category}</Text>
        <Text>Stock: {product.stock}</Text>
        <Text>Rating: {product.rating}</Text>
        <Text>Weight: {product.weight} kg</Text>
        <Text>SKU: {product.sku}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 40,
    borderWidth: 1,
    borderColor: color.borderColor,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: color.buttonBlue,
    padding: 10,
    marginLeft: 8,
    borderRadius: 4,
    marginTop: 20,
  },
  buttonText: {
    color: color.white,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
