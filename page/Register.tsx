import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Register: undefined;
  };

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;


export default function Register() {

    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handleLogin = () => {
        navigation.navigate('Login');
      };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer un Compte</Text>
      <TextInput style={styles.input} placeholder="Nom d'utilisateur" />
      <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmez le mot de passe" secureTextEntry />

      <Button
        title="S'inscrire"
      />

      <TouchableOpacity onPress={handleLogin} >
        <Text style={styles.signUpText}>
          Déjà un compte ? <Text style={styles.signUpLink}>Connectez-vous</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '80%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  signUpText: {
    marginTop: 16,
    color: '#333',
  },
  signUpLink: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});