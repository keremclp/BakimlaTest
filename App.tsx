import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppNavigator from './navigations/AppNavigator';

function App() {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        hidden={false}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
}

export default App;