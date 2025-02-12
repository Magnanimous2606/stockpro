import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Button, Platform } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type PendingRequestsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PendingRequests'>;

const requests = [
  { id: 1, employee: 'Emp A', itemName: 'Item A', quantity: 25, date: '25-01-2025' },
  { id: 2, employee: 'Emp B', itemName: 'Item B', quantity: 25, date: '25-01-2025' },
  { id: 3, employee: 'Emp C', itemName: 'Item C', quantity: 25, date: '25-01-2025' },
  { id: 4, employee: 'Emp D', itemName: 'Item D', quantity: 25, date: '25-01-2025' },
  { id: 5, employee: 'Emp E', itemName: 'Item E', quantity: 25, date: '25-01-2025' },
  { id: 6, employee: 'Emp F', itemName: 'Item F', quantity: 25, date: '25-01-2025' },
  { id: 7, employee: 'Emp G', itemName: 'Item G', quantity: 25, date: '25-01-2025' },
  { id: 8, employee: 'Emp H', itemName: 'Item H', quantity: 25, date: '25-01-2025' },
  { id: 9, employee: 'Emp I', itemName: 'Item I', quantity: 25, date: '25-01-2025' },
  // Add more requests here...
];

const PendingRequestsScreen: React.FC<{ navigation: PendingRequestsScreenNavigationProp }> = ({ navigation }) => {
  const [activeTab] = useState('requests');

  const iconColor = (tab: string) => (tab === activeTab ? 'blue' : 'black');

  const handleApprove = (id: number) => {
    console.log(`Approved request with id: ${id}`);
  };

  const handleDeny = (id: number) => {
    console.log(`Denied request with id: ${id}`);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Pending Requests</Text>
        <ScrollView>
          {requests.map((request, index) => (
            <View key={request.id}>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.cardDetails}>
                    <Text style={styles.cardheader}>{request.employee}</Text>
                    <Text style={styles.cardText}>Item Name: {request.itemName}</Text>
                    <Text style={styles.cardText}>Quantity: {request.quantity}</Text>
                    <Text style={styles.cardText}>Date of Request: {request.date}</Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <View style={[styles.buttonWrapper, styles.approveButton]}>
                      <Button title="Approve" color={Platform.OS === 'ios' ? 'white' : '#34C82C'} onPress={() => handleApprove(request.id)} />
                    </View>
                    <View style={[styles.buttonWrapper, styles.denyButton]}>
                      <Button title="Deny" color={Platform.OS === 'ios' ? 'white' : '#C82C2C'} onPress={() => handleDeny(request.id)} />
                    </View>
                  </View>
                </View>
              </View>
              {index < requests.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </ScrollView>
      
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingBottom:Platform.OS === 'android' ? 70 : 80,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    marginTop:30,
  },
  card: {
    // borderRadius: 10,
    padding: 5,
    marginBottom: 5,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    // elevation: 5,
    // backgroundColor: '#fff',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDetails: {
    flex: 0.7,
  },
  cardText: {
    fontSize: 16,
  },
  cardheader: {
    fontSize: 20,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'space-evenly',
  },
  buttonWrapper: {
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 5,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
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
  approveButton: {
    backgroundColor: Platform.OS === 'ios' ? '#34C82C' : 'transparent',
  },
  denyButton: {
    backgroundColor: Platform.OS === 'ios' ? '#C82C2C' : 'transparent',
  },
});

export default PendingRequestsScreen;
