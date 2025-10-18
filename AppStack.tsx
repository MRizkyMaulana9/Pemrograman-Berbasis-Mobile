// AppStack.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Setting: undefined;
  About: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

// --- Halaman Home ---
function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Home</Text>
      <Button
        title="Pergi ke Setting"
        onPress={() => navigation.navigate('Setting')}
      />
      <View style={styles.spacer} />
      <Button
        title="Pergi ke About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

// --- Halaman Setting ---
function SettingScreen({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Setting</Text>
      <Button
        title="Kembali ke Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

// --- Halaman About ---
function AboutScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman About</Text>
      <Button
        title="Kembali ke Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

// --- Stack Navigator ---
export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- Style ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  spacer: {
    height: 10,
  },
});
