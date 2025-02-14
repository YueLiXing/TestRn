// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import routes from './src/routes.tsx';

const pageKeys = Object.keys(routes);

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      {pageKeys.map(value => {
        return <Stack.Screen name={value} component={routes[value]} key={value} />;
      })}
    </Stack.Navigator>
  );
}

export default function App(props: any) {
  console.log('initprops', props);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
