import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={28} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Profile</Text>

      {/* Profile Image and Info */}
      <View style={styles.profileContainer}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with profile image URL
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil-outline" size={18} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>Robi</Text>
        <Text style={styles.profileDetails}>8967452743</Text>
        <Text style={styles.profileDetails}>robi123@gmail.com</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <MenuItem title="Order History" icon="time-outline" />

        <MenuItem title="Edit Profile" icon="create-outline" />
        <MenuItem title="Privacy Policy" icon="document-text-outline" />
        <MenuItem title="Log Out" icon="log-out-outline" />
      </View>
    </View>
  );
};

const MenuItem = ({ title, icon }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuIcon}>
      <Ionicons name={icon} size={20} color="#fff" />
    </View>
    <Text style={styles.menuText}>{title}</Text>
    <Ionicons name="chevron-forward-outline" size={20} color="#444" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Changed from black to white
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Changed from white to black
    textAlign: 'center',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImageWrapper: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000', // Changed from white to black
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff', // Changed from black to white
    borderRadius: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000', // Changed from white to black
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Changed from white to black
  },
  profileDetails: {
    fontSize: 14,
    color: '#666', // Changed from #ccc to a darker gray
    marginTop: 2,
  },
  menuContainer: {
    backgroundColor: '#234', // Changed from white to black
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333', // Changed from #eee to a lighter black
  },
  menuIcon: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#fff', // Changed from black to white
    marginLeft: 10,
  },
});

export default ProfileScreen;
