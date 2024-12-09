import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Icons for the design

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      {/* Container with rounded corners */}
      <View style={styles.container}>
      <TouchableOpacity
  style={styles.profileButton}
  onPress={() => navigation.navigate('ProfileScreen')} // Navigate to Profile Screen
>
  <Ionicons name="person-circle-outline" size={35} color="#fff" />
</TouchableOpacity>

        <Text style={styles.headerText}>Find Services</Text>
        <Text style={styles.providerText}>and provider</Text>
      </View>

      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('filterScreen')}>
        <Text style={styles.searchButtonText} >Service & Provider</Text>
        <Ionicons name="arrow-forward-outline" size={20} color="#fff" />
      </TouchableOpacity>

      {/* Other sections */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.category}>
          <Ionicons name="restaurant-outline" size={40} color="#000" />
          <Text style={styles.categoryText}>Chef</Text>
        </View>
        <View style={styles.category}>
          <Ionicons name="person-add-outline" size={40} color="#000" />
          <Text style={styles.categoryText}>Maid</Text>
        </View>
        <View style={styles.category}>
          <Ionicons name="school-outline" size={40} color="#000" />
          <Text style={styles.categoryText}>Tutor</Text>
        </View>
      </ScrollView>
      <Text style={styles.sectionTitle}>Recommended Services</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.recommendedCard}>
          <Text style={styles.recommendedText}>Jack Martin</Text>
          <Text style={styles.recommendedSubText}>Chef - $20/hr</Text>
        </View>
        <View style={styles.recommendedCard}>
          <Text style={styles.recommendedText}>Jane Doe</Text>
          <Text style={styles.recommendedSubText}>Maid - $15/hr</Text>
        </View>
        <View style={styles.recommendedCard}>
          <Text style={styles.recommendedText}>John Smith</Text>
          <Text style={styles.recommendedSubText}>Tutor - $25/hr</Text>
        </View>
        <View style={styles.recommendedCard}>
          <Text style={styles.recommendedText}>Emily Clark</Text>
          <Text style={styles.recommendedSubText}>Maid - $18/hr</Text>
        </View>
        <View style={styles.recommendedCard}>
          <Text style={styles.recommendedText}>Michael Lee</Text>
          <Text style={styles.recommendedSubText}>Chef - $22/hr</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Safe for Android
  },
  container: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20, // Rounded corners for the container
    marginBottom: 20, // Space below the container
    height: 150, // Adjusted height
    justifyContent: 'center', // Center the text vertically
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  providerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  searchButton: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    marginBottom: 20, // Space below the search button
  },
  searchButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
   
    color: '#000',
  },
  category: {
    backgroundColor: '#f0f0f0',
    marginRight: 20,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    height:135,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  recommendedCard: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginRight: 15,
    width: 150,
    alignItems: 'center',
  },
  recommendedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  recommendedSubText: {
    fontSize: 14,
    color: '#666',
  },
  profileButton: {
    position: 'relitive',  // Absolutely position it within the container
    left: 250,             // Move it to the right edge of the container
                  // Move it down slightly from the top
  },
});

export default HomeScreen;
