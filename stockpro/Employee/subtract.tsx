import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type SubtractQuantityScreenNavigationProp = StackNavigationProp<RootStackParamList, 'subtract'>;

const SubtractQuantityScreen: React.FC<{ navigation: SubtractQuantityScreenNavigationProp }> = ({ navigation }) => {
  const items = [
    { image: require('../../images/cement.png'), name: 'Item Name', usedQuantity: '5kg', remainingQuantity: '15kg', date: '18-01-2025' },
    { image: require('../../images/paint.png'), name: 'Item Name', usedQuantity: '5kg', remainingQuantity: '15kg', date: '18-01-2025' },
    { image: require('../../images/steel.png'), name: 'Item Name', usedQuantity: '5kg', remainingQuantity: '15kg', date: '18-01-2025' },
    { image: require('../../images/bricks.png'), name: 'Item Name', usedQuantity: '5kg', remainingQuantity: '15kg', date: '18-01-2025' },
    { image: require('../../images/cement.png'), name: 'Item Name', usedQuantity: '5kg', remainingQuantity: '15kg', date: '18-01-2025' },
    { image: require('../../images/paint.png'), name: 'Item Name', usedQuantity: '5kg', remainingQuantity: '15kg', date: '18-01-2025' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FAIcon name="arrow-left" size={24} color="#333" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>Subtract Quantity</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <FAIcon name="search" size={16} color="#333" style={styles.searchIcon} />
        <TextInput style={styles.searchBar} placeholder="Search items by name, category" />
      </View>
      <ScrollView>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>Used Quantity: {item.usedQuantity}</Text>
              <Text>Remaining Quantity: {item.remainingQuantity}</Text>
              <Text>Date: {item.date}</Text>
              <TouchableOpacity 
                style={styles.useButton}
                onPress={() => navigation.navigate('SubtractQuantity', { item })}
              >
                <Text style={styles.useButtonText}>Use</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backIcon: {
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 8,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
    marginBottom: 10, // Added margin bottom
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  itemDetails: {
    flex: 16,
  },
  itemName: {
    fontSize: 15,
  },
  useButton: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '18%',
  },
  useButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SubtractQuantityScreen;
