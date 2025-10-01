import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // bersihkan timer kalau komponen ditutup
    return () => clearInterval(timer);
  }, []); // [] = hanya sekali jalan saat awal

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Waktu: {seconds} detik</Text>
    </View>
  );
}
