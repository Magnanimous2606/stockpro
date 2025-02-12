import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Platform } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type InventoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Inventory'>;

const InventoryScreen: React.FC<{ navigation: InventoryScreenNavigationProp }> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<string>('stock');
  const items = [
    { id: 1234, name: 'Cement', stock: '20kg', category: 'Construction', image: require('../../images/cement.png') },
    { id: 5678, name: 'Red Paint', stock: '10 Liters', category: 'Paint & Coating', image: require('../../images/paint.png') },
    { id: 1839, name: 'Steel Rods', stock: '50 Units', category: 'Construction', image: require('../../images/steel.png') },
    { id: 9683, name: 'Bricks', stock: '500 Pieces', category: 'Construction', image: require('../../images/bricks.png') },
    { id: 4567, name: 'Cement', stock: '20kg', category: 'Construction', image: require('../../images/cement.png') },
    { id: 3456, name: 'Red Paint', stock: '10 Liters', category: 'Paint & Coating', image: require('../../images/paint.png') },
    
    // Add more items here...
  ];

  const iconColor = (tab: string) => (tab === activeTab ? '#007BFF' : '#333');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      <View style={styles.searchContainer}>
        <FAIcon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput style={styles.searchBar} placeholder="Search items by name, quantity, cost" />
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {items.map(item => (
          <View key={item.id} style={styles.inventoryItem}>
            {item.image && <Image source={item.image} style={styles.itemImage} />}
            <View style={styles.itemDetails}>
              <Text>#{item.id}</Text>
              <Text>Item Name: {item.name}</Text>
              <Text>In stock: {item.stock}</Text>
              <Text>Category: {item.category}</Text>
            </View>
            <View style={styles.itemActions}>
              <View style={styles.actionsRow}>
                <TouchableOpacity style={styles.actionButton}>
                  <FAIcon name="barcode" size={20} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <FAIcon name="edit" size={20} color="#000" />
                </TouchableOpacity>
              </View>
              <View style={styles.actionsRow}>
                <TouchableOpacity style={styles.actionButton}>
                  <FAIcon name="trash" size={20} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                <FAIcon name="eye" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={[styles.addButton, { marginBottom: 20 }]} onPress={() => navigation.navigate('additem1')}>
        <Text style={styles.addButtonText}>+ Add Item</Text>
      </TouchableOpacity>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'home' && styles.activeIcon]}
          onPress={() => navigation.navigate('StockPro')}>
          <FAIcon name="home" size={24} color={iconColor('home')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'requests' && styles.activeIcon]}
          onPress={() => navigation.navigate('PendingRequests')}>
          <FAIcon name="clipboard-list" size={24} color={iconColor('requests')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'stock' && styles.activeIcon]}
          onPress={() => navigation.navigate('Inventory')}>
          <FAIcon name="box-open" size={24} color={iconColor('stock')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'add' && styles.activeIcon]}
          onPress={() => navigation.navigate('AddItem')}>
          <FAIcon name="plus" size={24} color={iconColor('add')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'tools' && styles.activeIcon]}
          onPress={() => navigation.navigate('Tools')}>
          <FAIcon name="tools" size={24} color={iconColor('tools')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'wastage' && styles.activeIcon]}
          onPress={() => navigation.navigate('Wastage')}>
          <FAIcon name="trash-alt" size={24} color={iconColor('wastage')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 80, // Adjusted padding to move "Add Item" button up
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 10,
  },
  inventoryItem: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemActions: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  actionButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 5,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#28A745',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom:20,
    width:'35%',
    left:'30%',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
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

export default InventoryScreen;
