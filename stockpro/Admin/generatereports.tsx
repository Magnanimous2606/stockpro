import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type GenerateReportScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Wastage'>;

const GenerateReportScreen: React.FC<{ navigation: GenerateReportScreenNavigationProp }> = ({ navigation }) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [itemCategory, setItemCategory] = useState('');
  const [reportType, setReportType] = useState('');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleGenerateReport = () => {
    if (!startDate || !endDate || !itemCategory || !reportType) {
      Alert.alert('Error', 'All fields are required');
    } else {
      // Logic to generate report based on the selected parameters
      Alert.alert('Success', 'Report generated successfully');
    }
  };

  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Generate Report</Text>
      <Text style={styles.subtitle}>Select the parameters for the report</Text>
      <View style={styles.inputGroup}>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowStartDatePicker(true)}
        >
          <Text>{startDate ? formatDate(startDate) : '(dd/mm/yyyy)'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowEndDatePicker(true)}
        >
          <Text>{endDate ? formatDate(endDate) : '(dd/mm/yyyy)'}</Text>
        </TouchableOpacity>
      </View>
      {showStartDatePicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display="default"
          onChange={(event: any, selectedDate: React.SetStateAction<Date | undefined>) => {
            setShowStartDatePicker(false);
            if (selectedDate) setStartDate(selectedDate);
          }}
        />
      )}
      {showEndDatePicker && (
        <DateTimePicker
          value={endDate || new Date()}
          mode="date"
          display="default"
          onChange={(event: any, selectedDate: React.SetStateAction<Date | undefined>) => {
            setShowEndDatePicker(false);
            if (selectedDate) setEndDate(selectedDate);
          }}
        />
      )}
      <TextInput
        style={styles.fullInput}
        placeholder="Item Category"
        value={itemCategory}
        onChangeText={setItemCategory}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={reportType}
          onValueChange={(itemValue) => setReportType(itemValue)}
          style={styles.picker}
          itemStyle={{ height: Platform.OS === 'ios' ? 200 : undefined }}
          mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}
        >
          <Picker.Item label="Type of Report" value="" />
          <Picker.Item label="Summary" value="summary" />
          <Picker.Item label="Detailed" value="detailed" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGenerateReport}>
        <Text style={styles.buttonText}>Generate Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
    paddingBottom:70,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 0.48,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
  },
  fullInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
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

export default GenerateReportScreen;
