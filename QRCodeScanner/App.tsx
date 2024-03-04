import {Alert, SafeAreaView} from 'react-native';
import React from 'react';
import CameraExample from './src/CameraSample';
import BarcodeExample from './src/BarcodeExample';

export default function App() {
  const onBack = () => {
    Alert.alert('Back button pressed');
  };
  return (
    <SafeAreaView>
      {/* <CameraExample onBack={onBack} /> */}
      <BarcodeExample onBack={onBack} />
    </SafeAreaView>
  );
}
