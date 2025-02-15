import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import routes from '../routes.tsx';

export default function HomeScreen() {
  const navgation = useNavigation();
  const onClickOpenAppHome = (name: string) => {
    navgation.navigate(name, { name });
  };
  const pageKeys = Object.keys(routes);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        style={{ width: '100%' }}
        data={pageKeys}
        renderItem={item => {
          const name = item.item;
          return (
            <View style={{ backgroundColor: 'gray', borderBottomColor: 'white', borderRadius: 5, padding: 10, marginHorizontal: 6, marginVertical: 3 }}>
              <TouchableOpacity
                onPress={() => {
                  onClickOpenAppHome(name);
                }}>
                <Text>Open App {name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
