import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SquareAreaCalculator = () => {
  const [side, setSide] = useState('');
  const [area, setArea] = useState('');

  const calculate = () => {
    const value = parseFloat(side);
    if (!isNaN(value) && value >= 0) {
      setArea((value * value).toString());
    } else {
      setArea('Input tidak valid');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Luas Persegi</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan sisi"
        value={side}
        onChangeText={setSide}
        keyboardType="numeric"
      />
      <Button title="Hitung" onPress={calculate} />
      <Text style={styles.result}>Hasil: {area ? area + ' m²' : '-'}</Text>
    </View>
  );
};

export default SquareAreaCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    width: '80%',
    padding: 10,
    marginBottom: 12,
    textAlign: 'center',
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
