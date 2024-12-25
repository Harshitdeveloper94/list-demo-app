import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Product} from '../types';
import {sampleArr} from '../dummyData';
import {RootNavigationProp} from '../navigation/stackNavigation';
import {color} from '../constant/color';

const HomeScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const [searchText, setSearchText] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Product[]>(sampleArr);

  useEffect(() => {
    if (!searchText || searchText?.length === 0) {
      setFilteredData(sampleArr);
    }
  }, [searchText]);

  const handleSearch = () => {
    const filtered = sampleArr.filter(item => {
      return (
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchText.toLowerCase()) ||
        item.category.toLowerCase().includes(searchText.toLowerCase()) ||
        item.price.toString().includes(searchText)
      );
    });
    setFilteredData(filtered);
  };

  const renderCard = ({item}: {item: Product}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Details', {
          product: item,
        })
      }>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text>{item.brand}</Text>
      <Text>Category: {item.category}</Text>
      <View style={styles.priceAndBrandWrapper}>
        <Text>Stock: {item.stock}</Text>
        <Text style={styles.priceText}>Rs. {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchText}
          placeholderTextColor={color.gray}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          disabled={!searchText}
          style={[styles.button, !searchText && styles.disabledButton]}
          onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        showsVerticalScrollIndicator={false}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderColor: color.borderColor,
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: color.buttonBlue,
    padding: 10,
    marginLeft: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: color.white,
    fontWeight: 'bold',
  },
  card: {
    padding: 16,
    marginVertical: 8,
    borderColor: color.borderColor,
    borderWidth: 1,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: color.black,
  },
  priceAndBrandWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  priceText: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: '800',
  },
  disabledButton: {
    backgroundColor: color.borderColor,
  },
});
