import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import AppNavigator from './navigations/AppNavigator';

function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        hidden={false}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </>
  );
}

export default App;