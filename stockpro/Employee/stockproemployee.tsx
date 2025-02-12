import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type StockProEmployeeNavigationProp = StackNavigationProp<RootStackParamList, 'StockProEmployee'>;

const StockProEmployee: React.FC<{ navigation: StockProEmployeeNavigationProp }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StockPro</Text>
      <Text style={styles.subtitle}>Welcome, Employee!</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../../images/ami.png')} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ScanItems')}>
        <FAIcon name="barcode" size={20} color="#000" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Scan Items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StockRequest')}>
        <FAIcon name="cart-plus" size={20} color="#000" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Stock Request</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('subtract')}>
        <FAIcon name="minus-circle" size={20} color="#000" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Subtract Quantity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 25,
    right:90,
  },
  imageContainer: {
    marginTop: 25,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    width: '80%',
    borderWidth:0.5,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#5E5E5E',
  },
});

export default StockProEmployee;
//Stock pro employee