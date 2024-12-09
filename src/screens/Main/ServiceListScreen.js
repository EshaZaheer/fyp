import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const ServiceListingScreen = ({ navigation }) => {
  const providers = [
    {
      id: 1,
      name: 'John Doe',
      city: 'Karachi',
      rating: 4.5,
      description: 'Professional Chef with 5 years of experience in gourmet cooking.',
      image: 'https://placeimg.com/100/100/people',
    },
    {
      id: 2,
      name: 'Jane Smith',
      city: 'Lahore',
      rating: 4.0,
      description: 'Experienced Maid with a focus on cleanliness and order.',
      image: 'https://placeimg.com/100/100/people',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      city: 'Islamabad',
      rating: 4.8,
      description: 'Highly skilled Tutor with expertise in Mathematics and Science.',
      image: 'https://placeimg.com/100/100/people',
    },
    {
      id: 4,
      name: 'Maria Lee',
      city: 'Peshawar',
      rating: 5.0,
      description: 'Expert Tutor with a passion for teaching kids.',
      image: 'https://placeimg.com/100/100/people',
    },
    {
      id: 5,
      name: 'Michael Brown',
      city: 'Karachi',
      rating: 4.3,
      description: 'Chef specializing in Italian and Mediterranean cuisines.',
      image: 'https://placeimg.com/100/100/people',
    },
  ];

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;

    let stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<Text key={`filled-${i}`} style={styles.star}>★</Text>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Text key={`empty-${i}`} style={styles.star}>☆</Text>);
    }
    return stars;
  };

  const handleProviderClick = (providerId) => {
    // Handle provider click, for example, navigate to a detailed page
    console.log(`Provider clicked: ${providerId}`);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.headerText}>Providers Listing</Text>
      <ScrollView style={styles.scrollView}>
        {providers.map((provider) => (
          <TouchableOpacity 
            key={provider.id} 
            style={styles.providerContainer}
            onPress={() => navigation.navigate('ServiceDetailsScreen')}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: provider.image }} style={styles.providerImage} />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.providerName}>{provider.name}</Text>
              <Text style={styles.providerCity}>{provider.city}</Text>
              <View style={styles.ratingContainer}>
                {renderStars(provider.rating)}
              </View>
              <Text style={styles.providerDescription}>{provider.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  providerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    marginRight: 15,
  },
  providerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  providerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  providerCity: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    color: '#FFD700',
    fontSize: 16,
  },
  providerDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default ServiceListingScreen;
