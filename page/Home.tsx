import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Register: undefined;
  };

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {

    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handleLogout = () => {
        // Naviguer vers l'écran Login après la déconnexion
        navigation.navigate('Login');
      };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'Accueil !</Text>
      <Button title="Déconnexion" onPress={handleLogout} />
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
});