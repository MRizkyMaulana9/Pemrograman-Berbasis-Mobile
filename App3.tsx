import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Tampilkan Modal" onPress={() => setVisible(true)} />

      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Text>Ini isi modal</Text>
            <Button title="Tutup" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
