import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';

const banknotes = [
  { name: '5 TL', value: 5, image: require('./5tl.png') },
  { name: '10 TL', value: 10, image: require('./10tl.png') },
  { name: '20 TL', value: 20, image: require('./20tl.png') },
  { name: '50 TL', value: 50, image: require('./50tl.png') },
  { name: '100 TL', value: 100, image: require('./100tl.png') },
  { name: '200 TL', value: 200, image: require('./200tl.png') },
];

const HomeScreen = () => {
  const [banknoteCounts, setBanknoteCounts] = useState({});

  const handleIncrementCount = (banknote) => {
    const count = banknoteCounts[banknote.name] || 0;
    setBanknoteCounts({ ...banknoteCounts, [banknote.name]: count + 1 });
  };

  const handleDecrementCount = (banknote) => {
    const count = banknoteCounts[banknote.name] || 0;
    if (count > 0) {
      setBanknoteCounts({ ...banknoteCounts, [banknote.name]: count - 1 });
    }
  };

  const handleCalculateTotal = () => {
    let totalValue = 0;
    banknotes.forEach((banknote) => {
      const count = banknoteCounts[banknote.name] || 0;
      totalValue += banknote.value * count;
    });
    alert(`Toplam Para Değeri: ${totalValue} TL`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {banknotes.map((banknote) => (
          <View key={banknote.name} style={styles.banknoteItem}>
            <Image source={banknote.image} style={styles.banknoteImage} />
            <Text style={styles.banknoteText}>{banknote.name}</Text>
            <View style={styles.buttonContainer}>
              <Button title="-" onPress={() => handleDecrementCount(banknote)} />
              <Text style={styles.countText}>{banknoteCounts[banknote.name] || 0}</Text>
              <Button title="+" onPress={() => handleIncrementCount(banknote)} />
            </View>
          </View>
        ))}
      </ScrollView>

      <Button
        title="Hesapla"
        onPress={handleCalculateTotal}
        style={styles.calculateButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 30,
  },
  banknoteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  banknoteImage: {
    width: 150,
    height: 150,
    marginRight: 25,
  },
  banknoteText: {
    fontSize: 18,
    marginRight: 35,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    fontSize: 25,
    marginHorizontal: 35,
  },
  calculateButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
