import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type SiteUsageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Tools'>;

const SiteUsageScreen: React.FC<{ navigation: SiteUsageScreenNavigationProp }> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<string>('tools');

  const items = [
    { image: require('../../images/cement.png'), name: 'Item Name', usedBy: 'Emp A', usedQuantity: '5kg', remainingQuantity: '15kg', date: '18-01-2025', time: '09:00 AM' },
    { image: require('../../images/paint.png'), name: 'Item Name', usedBy: 'Emp B', usedQuantity: '10 Liters', remainingQuantity: '20 Liters', date: '19-01-2025', time: '10:00 AM' },
    { image: require('../../images/steel.png'), name: 'Item Name', usedBy: 'Emp A', usedQuantity: '5kg', remainingQuantity: '15kg', date: '18-01-2025', time: '09:00 AM' },
    { image: require('../../images/bricks.png'), name: 'Item Name' ,usedBy: 'Emp B', usedQuantity: '10 Liters', remainingQuantity: '20 Liters', date: '19-01-2025', time: '10:00 AM' },
    { image: require('../../images/cement.png'), name: 'Item Name', usedBy: 'Emp A', usedQuantity: '5kg', remainingQuantity: '15kg', date: '18-01-2025', time: '09:00 AM' },
    { image: require('../../images/paint.png'), name: 'Item Name', usedBy: 'Emp B', usedQuantity: '10 Liters', remainingQuantity: '20 Liters', date: '19-01-2025', time: '10:00 AM' },
    // Add more items here...
  ];

  const iconColor = (tab: string) => (tab === activeTab ? 'blue' : 'black');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Site Usage</Text>
      <View style={styles.searchContainer}>
        <FAIcon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput style={styles.searchBar} placeholder="Search items by name, employee" />
      </View>
      <ScrollView>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.itemImage} />
            </View>
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>Used by: {item.usedBy}</Text>
              <Text>Used Quantity: {item.usedQuantity}</Text>
              <Text>Remaining Quantity: {item.remainingQuantity}</Text>
              <Text>Date: {item.date}</Text>
              <Text>Time: {item.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'home' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('home');
            navigation.navigate('StockPro');
          }}>
          <FAIcon name="home" size={24} color={iconColor('home')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'requests' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('requests');
            navigation.navigate('PendingRequests');
          }}>
          <FAIcon name="clipboard-list" size={24} color={iconColor('requests')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'stock' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('stock');
            navigation.navigate('Inventory');
          }}>
          <FAIcon name="box-open" size={24} color={iconColor('stock')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'add' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('add');
            navigation.navigate('AddItem');
          }}>
          <FAIcon name="plus" size={24} color={iconColor('add')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'tools' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('tools');
            navigation.navigate('Tools');
          }}>
          <FAIcon name="tools" size={24} color={iconColor('tools')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'wastage' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('wastage');
            navigation.navigate('Wastage');
          }}>
          <FAIcon name="trash-alt" size={24} color={iconColor('wastage')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingBottom:Platform.OS === 'android' ? 70 : 90,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
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
    padding: 3,
    marginTop: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 0.35,
  },
  itemImage: {
    width: '100%',
    aspectRatio: 1,
  },
  itemDetails: {
    flex: 0.65,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    position: 'absolute',
   bottom: Platform.OS === 'android' ? 10 : 30,
    left: 2,
    right: 2,
    backgroundColor: 'transparent',
  },
  iconContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  activeIcon: {
    backgroundColor: '#d9d9d9',
    borderRadius: 12,
  },
});

export default SiteUsageScreen;
