import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons (requires `expo install @expo/vector-icons` if using Expo)

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter both email and password!');
      return;
    }
    // Login functionality here
    alert('Login Successful!');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Title */}
      <Text style={styles.title}>Login to ServiceApp</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="gray"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="gray"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword} // Toggle password visibility
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)} // Toggle visibility state
          style={styles.eyeIconContainer}
        >
          <Ionicons
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('RegistrationScreen')} // Navigate to Signup
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const { width } = Dimensions.get('window'); // Get screen width for responsive design

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.9, // 90% of screen width
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  icon: {
    marginRight: 10,
  },
  eyeIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: 'black',
    width: width * 0.9,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountText: {
    color: 'black',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

