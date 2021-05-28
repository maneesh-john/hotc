import React from "react";
import { ImageBackground, View, Image } from "react-native";

import styles from "../styles/commonStyles";
import images from "../constants/images";

export default ({ children, bg }) => {

  const src = bg? {uri: `file://${bg}`}: images.main;

  return(
    <ImageBackground
      source={src}
      style={styles.container}
    >
      <View style={styles.overlay}>
        {children}
        <Image
          source={images.logo}
          style={styles.logo}
        />
      </View>
    </ImageBackground>
  )
};