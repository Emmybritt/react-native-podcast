import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';

const CustomerScreen = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw('text-blue-400 text-xl')}>jdjdjdjdj</Text>
    </SafeAreaView>
  );
};

export default CustomerScreen;
