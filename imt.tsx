import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [imt, setImt] = useState<number | null>(null);
  const [kategori, setKategori] = useState('');

  const hitungIMT = () => {
    const b = parseFloat(berat);
    const t = parseFloat(tinggi) / 100; // ubah cm ke meter
    if (!b || !t) {
      setImt(null);
      setKategori('Masukkan data dengan benar!');
      return;
    }

    const hasil = b / (t * t);
    setImt(hasil);

    if (hasil < 18.5) setKategori('Kurus');
    else if (hasil < 25) setKategori('Normal');
    else if (hasil < 30) setKategori('Gemuk');
    else setKategori('Obesitas');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalkulator Indeks Massa Tubuh</Text>

      <TextInput
        style={styles.input}
        placeholder="Berat badan (kg)"
        keyboardType="numeric"
        value={berat}
        onChangeText={setBerat}
      />

      <TextInput
        style={styles.input}
        placeholder="Tinggi badan (cm)"
        keyboardType="numeric"
        value={tinggi}
        onChangeText={setTinggi}
      />

      <Button title="Hitung IMT" onPress={hitungIMT} />

      {imt !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>IMT: {imt.toFixed(2)}</Text>
          <Text style={styles.categoryText}>Kategori: {kategori}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E9F5FF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 16,
    marginTop: 5,
  },
});
