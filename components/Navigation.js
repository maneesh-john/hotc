import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { navigationScreenOptions } from "../constants/options";

import Landing from "../screens/Landing";
import ImageGallery from "../screens/ImageGallery";
import Images from "../screens/Images";
import VideoGallery from "../screens/VideoGallery";
import Videos from "../screens/Videos";

const { Navigator, Screen } = createStackNavigator();

const Navigation = () => {

  return(
    <NavigationContainer>
      <Navigator screenOptions={navigationScreenOptions}>
        <Screen
          name="Landing"
          component={Landing}
        />
        <Screen
          name="ImageGallery"
          component={ImageGallery}
        />
        <Screen
          name="Images"
          component={Images}
        />
        <Screen
          name="VideoGallery"
          component={VideoGallery}
        />
         <Screen
          name="Videos"
          component={Videos}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Navigation;