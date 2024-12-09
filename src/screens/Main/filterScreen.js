import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Platform, StatusBar, Modal, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import DateTimePickerModal from "react-native-modal-datetime-picker"; // for the calendar

const filterScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [duration, setDuration] = useState('');
  const [occasion, setOccasion] = useState('');
  const [price, setPrice] = useState('');
  const [isPriceValid, setPriceValid] = useState(true);
  const [selectedCity, setSelectedCity] = useState('');

  // Handle date selection
  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setDatePickerVisibility(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const handlePriceChange = (value) => {
    setPrice(value);
    setPriceValid(value >= 2000);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.headerText}>Service & Providers</Text>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        {['Chef', 'Maid', 'Tutor'].map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategorySelect(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* City Selection */}
      <Text style={styles.sectionTitle}>Choose City</Text>
      <View style={styles.cityContainer}>
        {['Karachi', 'Lahore', 'Islamabad', 'Peshawar'].map((city, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.cityButton,
              selectedCity === city && styles.selectedCityButton,
            ]}
            onPress={() => handleCitySelect(city)}
          >
            <Text style={styles.cityText}>{city}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Date Picker */}
      <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.dateButton}>
        <Text style={styles.dateText}>{selectedDate ? selectedDate.toLocaleDateString() : 'Choose Date'}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />

      {/* Duration Selection with Horizontal Scroll */}
      <Text style={styles.sectionTitle}>Duration</Text>
      <ScrollView horizontal style={styles.scrollContainer}>
        {['Day', 'Week', 'Month', 'Special Occasion'].map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.durationButton,
              duration === option && styles.selectedDurationButton,
            ]}
            onPress={() => setDuration(option)}
          >
            <Text style={styles.durationText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Special Occasion Input */}
      {duration === 'Special Occasion' && (
        <TextInput
          style={styles.input}
          placeholder="Enter occasion name"
          value={occasion}
          onChangeText={setOccasion}
        />
      )}

      {/* Time Selection */}
      <Text style={styles.sectionTitle}>Choose Time</Text>
      <TextInput
        style={styles.input}
        placeholder="Select Time"
      />

      {/* Pricing */}
      <Text style={styles.sectionTitle}>Pricing</Text>
      <TextInput
        style={[
          styles.input,
          !isPriceValid && styles.invalidPrice
        ]}
        placeholder="Enter Price"
        keyboardType="numeric"
        value={price}
        onChangeText={handlePriceChange}
      />
      {!isPriceValid && <Text style={styles.invalidPriceMessage}>Cannot be lower than 2000</Text>}

      {/* Apply Button */}
      <TouchableOpacity style={styles.applyButton} onPress={() => navigation.navigate('ServiceListScreen')}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 15,
  },
  selectedCategoryButton: {
    backgroundColor: '#234',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cityContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cityButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 15,
  },
  selectedCityButton: {
    backgroundColor: '#234',
  },
  cityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  dateButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollContainer: {
    marginBottom: 20,
  },
  durationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  durationButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 15,
  },
  selectedDurationButton: {
    backgroundColor: '#234',
  },
  durationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  invalidPrice: {
    borderColor: 'red',
    borderWidth: 1,
  },
  invalidPriceMessage: {
    color: 'red',
    fontSize: 12,
  },
  applyButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default filterScreen;
