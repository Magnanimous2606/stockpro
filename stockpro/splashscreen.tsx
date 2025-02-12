import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App'; // Adjust the path as necessary

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC<{ navigation: SplashScreenNavigationProp }> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>
      <Image source={require('../images/logo.png')} style={styles.logo} resizeMode="contain" />
      {/* <Text style={styles.splashText}>STOCKPRO</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '110%', // Adjust width to 100% of its container
    height: Platform.OS === 'android' ? 100 : 90, // Adjust height to 50% of its container
  },
});

export default SplashScreen;
