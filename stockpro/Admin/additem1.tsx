import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert, SafeAreaView, Platform } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type AddItemScreenNavigationProp = StackNavigationProp<RootStackParamList, 'additem1'>;

const AddItemScreen: React.FC<{ navigation: AddItemScreenNavigationProp }> = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [activeTab, setActiveTab] = useState<string>('add');

  const handleAddItem = () => {
    if (!itemName || !category || !quantity) {
      Alert.alert('Error', 'All fields are required');
    } else {
      Alert.alert('Success', 'Item added successfully');
      setItemName('');
      setCategory('');
      setQuantity('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FAIcon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Add Item</Text>
      </View>
      <View style={styles.splashContainer}>
        <Image source={require('../../images/amico.png')} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Item name" 
          value={itemName}
          onChangeText={setItemName}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Category" 
          value={category}
          onChangeText={setCategory}
        />
        <View style={styles.quantityContainer}>
          <TextInput 
            style={styles.inputQuantity} 
            placeholder="Quantity" 
            keyboardType="numeric" 
            value={quantity}
            onChangeText={setQuantity}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => setQuantity((prev) => (parseInt(prev, 10) + 1).toString())} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>˄</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setQuantity((prev) => (parseInt(prev, 10) - 1).toString())} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>˅</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingBottom: 70,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 40,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  splashContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 50 : 70,
  },
  image: {
    width: 200,
    height: 200,
  },
  inputContainer: {
    flex: 3,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputQuantity: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: 'left', // Align the text to the left
    paddingTop: 10, // Add some top padding to ensure visibility
    flex: 1,
  },  
  buttonContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  quantityButton: {
    // backgroundColor: '#d1d1d1',
    // borderRadius: 5,
    // paddingVertical: 10, // Increased padding to make the buttons larger
    // paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 2, // Reduced gap between the buttons
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    marginTop: Platform.OS === 'android' ? 70:50,
  },
  addButtonText: { color: '#fff', fontSize: 16, },
});

export default AddItemScreen;
