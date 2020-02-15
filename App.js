import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import AppNavigator from './src/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <View style={styles.container}>

          <AppNavigator></AppNavigator>
        </View>
      </PersistGate>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
