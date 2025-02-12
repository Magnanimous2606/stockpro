import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type WastageReportScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Wastage'>;

const WastageReportScreen: React.FC<{ navigation: WastageReportScreenNavigationProp }> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<string>('wastage');
  const screenWidth = Dimensions.get('window').width;

  const barData = {
    labels: ['Jan 18', 'Jan 19', 'Jan 20', 'Jan 21', 'Jan 22', 'Jan 23', 'Jan 24'],
    datasets: [
      {
        label: 'Wastage',
        data: [5, 3, 4, 6, 8, 10, 15],
      },
    ],
  };

  const pieData = [
    {
      name: 'Item A',
      population: 98.87,
      color: 'rgba(54, 162, 235, 0.6)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Item B',
      population: 26.55,
      color: 'rgba(75, 192, 192, 0.6)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const iconColor = (tab: string) => (tab === activeTab ? '#007BFF' : '#333');

  const rgba = (r: number, g: number, b: number, opacity: number) => {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Wastage Report</Text>
      <Text style={styles.dateText}>Generated on 24-01-2025</Text>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Bar Report</Text>
        <BarChart
          data={barData}
          width={screenWidth - 40}
          height={220}
          yAxisLabel=""
          yAxisSuffix="kg"
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2,
            color: (opacity = 1) => rgba(0, 123, 255, opacity),
            labelColor: (opacity = 1) => rgba(0, 0, 0, opacity),
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Pie Report</Text>
        <PieChart
          data={pieData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => rgba(0, 123, 255, opacity),
            labelColor: (opacity = 1) => rgba(0, 0, 0, opacity),
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Generatereport')}>
        <Text style={styles.buttonText}>Generate Report</Text>
      </TouchableOpacity>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'home' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('home');
            navigation.navigate('StockPro');
          }}>
          <FAIcon name="home" size={24} color={iconColor('home')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'requests' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('requests');
            navigation.navigate('PendingRequests');
          }}>
          <FAIcon name="clipboard-list" size={24} color={iconColor('requests')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'stock' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('stock');
            navigation.navigate('Inventory');
          }}>
          <FAIcon name="box-open" size={24} color={iconColor('stock')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'add' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('add');
            navigation.navigate('AddItem');
          }}>
          <FAIcon name="plus" size={24} color={iconColor('add')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'tools' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('tools');
            navigation.navigate('Tools');
          }}>
          <FAIcon name="tools" size={24} color={iconColor('tools')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, activeTab === 'wastage' && styles.activeIcon]}
          onPress={() => {
            setActiveTab('wastage');
            navigation.navigate('Wastage');
          }}>
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
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  chartContainer: {
    flex: 1,
    marginVertical: 10,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
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

export default WastageReportScreen;