import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; 

type StockRequestScreenNavigationProp = StackNavigationProp<RootStackParamList, 'StockRequest'>;
const StockRequestScreen: React.FC <{ navigation: StockRequestScreenNavigationProp }> = ({ navigation }) => {
  
  const [siteName, setSiteName] = useState('');
  const [quantity, setQuantity] = useState('');

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => (parseInt(prevQuantity) || 0) - 1 + '');
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (parseInt(prevQuantity) || 0) + 1 + '');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FAIcon name="arrow-left" size={24} color="#333" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Stock Request</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../images/bro.png')} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter Site Name" value={siteName} onChangeText={setSiteName} />
        <TextInput style={styles.input} placeholder="Enter Item Name" />
        <TextInput style={styles.input} placeholder="Enter Category" />
        <View style={styles.quantityContainer}>
          <TextInput style={styles.inputQuantity} placeholder="Enter Quantity" value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
          <View style={styles.buttonContainer}>
                      <TouchableOpacity onPress={() => setQuantity((prev) => (parseInt(prev, 10) + 1).toString())} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>˄</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setQuantity((prev) => (parseInt(prev, 10) - 1).toString())} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>˅</Text>
                      </TouchableOpacity>
                    </View>
        </View>
        <View style={styles.sizeContainer}>
          <TextInput style={styles.inputSize} placeholder="Enter Item Size" />
          <Text style={styles.sizeUnit}>ft</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Request Stock</Text>
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
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop:20,
  },
  inputContainer: {
    marginTop: 30,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
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
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:15,
  },
  inputSize: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  sizeUnit: {
    marginLeft: 10,
    padding: 10, // Add padding to make it look like a box
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  button: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginTop:50,
    
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
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 2, // Reduced gap between the buttons
  },
  quantityButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    marginRight: 10,
  },
});

export default StockRequestScreen;
//stockrequest