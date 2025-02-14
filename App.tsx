// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHome from './src/home/AppHome';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SimpleAnimation from './src/animate/SimpleAnimation';
import NestedAnimation from "./src/animate/NestedAnimation";

function HomeScreen() {
  const navgation = useNavigation();
  const onClickOpenAppHome = (name: string) => {
    navgation.navigate(name);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          onClickOpenAppHome('AppHome');
        }}>
        <Text>Open App Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onClickOpenAppHome('SimpleAnimation');
        }}>
        <Text>Open SimpleAnimation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onClickOpenAppHome('NestedAnimation');
        }}>
        <Text>Open NestedAnimation</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AppHome" component={AppHome} />
      <Stack.Screen name="SimpleAnimation" component={SimpleAnimation} />
      <Stack.Screen name="NestedAnimation" component={NestedAnimation} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
