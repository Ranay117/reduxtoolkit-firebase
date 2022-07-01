import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  // const onReady = () => {
  //   RNBootSplash.hide({fade: true});
  // };

  return (
    <View>
      <Text>First Page</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default App;
