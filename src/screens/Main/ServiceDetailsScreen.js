import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Platform,
  StatusBar
} from 'react-native';

const ServiceDetailScreen = ({ route, navigation }) => {
  const { provider } = route.params; // Get provider details passed from listing screen

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <View style={styles.screen}>
      {/* Circular Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: provider.image }} style={styles.image} />
      </View>

      {/* Name, City, and Rating */}
      <Text style={styles.name}>{provider.name}</Text>
      <Text style={styles.city}>{provider.city}</Text>

      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{provider.rating} ★</Text>
      </View>

      {/* Description */}
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{provider.description}</Text>

      {/* Comments Section */}
      <Text style={styles.sectionTitle}>Comments</Text>

      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.comment}>{item}</Text>}
        style={styles.commentsList}
      />

      {/* Add Comment */}
      <View style={styles.addCommentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddComment}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
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
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#000',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginVertical: 5,
  },
  city: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  ratingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
  },
  commentsList: {
    maxHeight: 150,
    marginBottom: 20,
  },
  comment: {
    fontSize: 14,
    color: '#444',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ServiceDetailScreen;
