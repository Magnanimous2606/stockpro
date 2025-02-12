import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type SubtractQuantityScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SubtractQuantity'>;

const SubtractQuantityScreen: React.FC<{ navigation: SubtractQuantityScreenNavigationProp }> = ({ navigation }) => {
  const [siteName, setSiteName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleUseStock = () => {
    // Logic to subtract stock quantity
    console.log(`Site Name: ${siteName}, Quantity: ${quantity}`);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => (parseInt(prevQuantity) || 0) + 1 + '');
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (parseInt(prevQuantity) || 0) - 1 + '');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FAIcon name="arrow-left" size={24} color="#333" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Subtract Quantity</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../images/bro.png')} style={styles.image} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter Site Name"
        value={siteName}
        onChangeText={setSiteName}
      />
      <View style={styles.quantityContainer}>
        <TextInput
          style={styles.inputQuantity}
          placeholder="Enter Quantity"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
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
      <TouchableOpacity style={styles.button} onPress={handleUseStock}>
        <Text style={styles.buttonText}>Use Stock</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputQuantity: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  arrows: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  arrowIcon: {
    marginBottom: 2,
  },
  button: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginTop:60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    
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
});

export default SubtractQuantityScreen;
//subtract quantity