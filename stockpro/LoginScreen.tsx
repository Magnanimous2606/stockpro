import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Platform, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App'; // Adjust the path as necessary

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<{ navigation: LoginScreenNavigationProp }> = ({ navigation }) => {
  const [userType, setUserType] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (userType === 'admin') {
      navigation.navigate('StockPro');
    } else if (userType === 'employee') {
      navigation.navigate('StockProEmployee');
    } else {
      Alert.alert('Error', 'Please Select User Type');
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>Login</Text>
      <Image source={require('../images/illustration.png')} style={styles.illustration} />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={userType}
          onValueChange={(itemValue) => setUserType(itemValue)}
          style={styles.picker}
          itemStyle={{ height: Platform.OS === 'ios' ? 200 : undefined }}
          mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}>
          <Picker.Item label="Choose user type" value="" />
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Employee" value="employee" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your ID"
        value={userID}
        onChangeText={setUserID}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  pickerContainer: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  illustration: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: '100%',
    marginTop: Platform.OS === 'android' ? 60 : 20,
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
