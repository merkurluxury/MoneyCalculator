import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [gender, setGender] = useState(null);
  const navigation = useNavigation();

  const handleNext = () => {
    console.log('İleri butonuna tıklandı!');
    // CoursesScreen'e yönlendirme yapma
    navigation.navigate('Para Hesaplama'); //
  };

  return (
    <View style={styles.container}>
      <Image source={require('./logo.png')} style={styles.logo} />
     
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>İleri</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Arka plan rengini siyah yapar
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genderButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  selectedGender: {
    backgroundColor: '#2196f3',
  },
  buttonText: {
    color: '#000',
  },
  nextButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  nextButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
