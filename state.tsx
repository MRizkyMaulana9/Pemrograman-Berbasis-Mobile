import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [count, setcount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Jumlah: {count}</Text>
      <Button title="Tambah" onPress={() => setcount(count + 1)} />
      <Button title="Reset" onPress={() => setcount(0)} />
    </View>
  );
}
