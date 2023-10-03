/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';




function App(): JSX.Element {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <StatusBar
          barStyle={'light-content'}
          backgroundColor={"blue"}
        /> */}
        <RootNavigation />
      </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}


export default App;
