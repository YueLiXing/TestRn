import React, {createContext, useCallback, useContext, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";

const DetailContext = createContext({
  count: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCount: (count:string) => {},
});

function ContextPage() {
  const [count,setCount] = useState('0');
  const onLickAdd = useCallback(() => {
    setCount(`${parseInt(count) + 1}`);
  }, [count]);
  return (
    <DetailContext.Provider value={{count, setCount}}>
      <View>
        <Text>{count}</Text>
      </View>
      <RedBtn/>
      <TouchableOpacity onPress={onLickAdd}>
        <Text>Add</Text>
      </TouchableOpacity>
    </DetailContext.Provider>
  )
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
  )
}

export default ContextPage;
