import React, {useState, useEffect, useRef} from 'react';
import {Animated, ImageBackground, StyleSheet, View} from 'react-native';
import RootNavigation from './src/navigation';
import SplashScreen from 'react-native-splash-screen';

function App() {
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 50,
  },
});

export default App;
