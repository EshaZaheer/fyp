import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const RegistrationScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegistration = () => {
    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    // Handle registration logic here
    Alert.alert('Registration Successful!');
    navigation.navigate('HomeScreen'); // Navigate to HomeScreen on successful registration
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Create an Account</Text>
      <Text style={styles.subHeaderText}>Sign up to get started</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        {/* Full Name Input */}
        <View style={styles.inputWrapper}>
          <Ionicons name="person-outline" size={20} color="gray" style={styles.icon} />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#aaa"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        {/* Phone Number Input */}
        <View style={styles.inputWrapper}>
          <Ionicons name="call-outline" size={20} color="gray" style={styles.icon} />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#aaa"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIconContainer}
          >
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeIconContainer}
          >
            <Ionicons
              name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.loginText}> Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    padding: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000', // Black text
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#555', // Gray text
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // Light gray background
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000', // Black text for input
  },
  icon: {
    marginRight: 10,
  },
  eyeIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  registerButton: {
    backgroundColor: '#000', // Black button
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#fff', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#555', // Gray text
    fontSize: 14,
  },
  loginText: {
    color: '#000', // Black text for "Log In"
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default RegistrationScreen;
