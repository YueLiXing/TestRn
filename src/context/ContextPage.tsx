import React, {createContext, useCallback, useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Route} from "@react-navigation/native";

const DetailContext = createContext({
  count: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCount: (count:string) => {},
});

type ContextPageRouteParam = {
  name: string;
}

function ContextPage(props: {route: Route<string,ContextPageRouteParam> }) {
  console.log('param', props, props.route.params);
  const [count,setCount] = useState('0');
  const onLickAdd = useCallback(() => {
    setCount(`${parseInt(count) + 1}`);
  }, [count]);
  return (
    <DetailContext.Provider value={{count, setCount}}>
      <SafeAreaView edges={['bottom']}>
        <View>
          <Text>{count}</Text>
        </View>
        <RedBtn/>
        <TouchableOpacity onPress={onLickAdd}>
          <Text>Add</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </DetailContext.Provider>
  );
}

function RedBtn() {
  const {count, setCount}  = useContext(DetailContext);
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => setCount(`${parseInt(count) + 2}`)}>
        <Text>Add2</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ContextPage;
