// import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from "react-native-splash-screen";

import { StateProvider } from "./contexts/StateContext";
import styles from "./styles/commonStyles";

import Navigation from "./components/Navigation";
import Loader from "./components/Loader";

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <StateProvider>
          <Navigation />
          <Loader />
        </StateProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
