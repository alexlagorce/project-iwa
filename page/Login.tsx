import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
    
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Ajout du logo en haut de la page */}
      <Image
        source={require('../assets/images/logo-iwa.jpg')} // Remplacez par le chemin correct vers votre logo
        style={styles.logo}
      />

      {/* Titre de la page */}
      <Text style={styles.title}>Connexion</Text>

      {/* Champ Nom d'utilisateur */}
      <TextInput style={styles.input} placeholder="Nom d'utilisateur" />

      {/* Champ Mot de passe */}
      <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry />

      {/* Bouton Connexion */}
      <Button title="Connexion" onPress={() => navigation.navigate('Home')} />

      {/* Lien pour s'inscrire */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signUpText}>
          Pas de compte ? <Text style={styles.signUpLink}>Inscrivez-vous</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centrer verticalement
    alignItems: 'center', // Centrer horizontalement
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100, // Largeur du logo
    height: 100, // Hauteur du logo
    marginBottom: 32, // Espace entre le logo et le titre
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