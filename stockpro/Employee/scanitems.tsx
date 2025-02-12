import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type ScanItemsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ScanItems'>;

const ScanItemsScreen: React.FC<{ navigation: ScanItemsScreenNavigationProp }> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FAIcon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Scan Items</Text>
      </View>
      <View style={styles.scanArea}>
        <View style={styles.cornerTopLeft} />
        <View style={styles.cornerTopRight} />
        <View style={styles.cornerBottomLeft} />
        <View style={styles.cornerBottomRight} />
      </View>
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => navigation.navigate('Scanneditems')}>
        <FAIcon name="camera" size={24} color="#000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scanArea: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 120, // Move scan area up
  },
  cornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#000',
  },
  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#000',
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 50,
    height: 50,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#000',
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#000',
  },
  cameraButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScanItemsScreen;
//scan items