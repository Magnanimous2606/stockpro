import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type StockProScreenNavigationProp = StackNavigationProp<RootStackParamList, 'StockPro'>;

const StockProScreen: React.FC<{ navigation: StockProScreenNavigationProp }> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('home');

  const iconColor = (tab: string) => (tab === activeTab ? 'blue' : 'black');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>StockPro</Text>
      <Text style={styles.subtitle}>Welcome, Admin!</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Stock</Text>
        <Text style={styles.cardValue}>Value: 1,200 items</Text>
        <Text style={styles.cardTrend}>Trend: 5% <FAIcon name="arrow-up" size={12} color="green" /></Text>
        <FAIcon name="box" size={24} style={styles.cardIcon} />
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Requests Pending</Text>
        <Text style={styles.cardValue}>Value: 15 Requests</Text>
        <Text style={styles.cardTrend}>Trend: 2% <FAIcon name="arrow-down" size={12} color="red" /></Text>
        <FAIcon name="clipboard-list" size={24} style={styles.cardIcon} />
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Wastage</Text>
        <Text style={styles.cardValue}>Value: 5%</Text>
        <Text style={styles.cardTrend}>Trend: 1% <FAIcon name="arrow-up" size={12} color="green" /></Text>
        <FAIcon name="trash" size={24} style={styles.cardIcon} />
      </View>
      
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    marginRight:200,
  
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    position: 'relative',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 16,
    marginVertical: 5,
  },
  cardTrend: {
    fontSize: 14,
    color: 'gray',
  },
  cardIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
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
    zIndex:10,
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

export default StockProScreen;

