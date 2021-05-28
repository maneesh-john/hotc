import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import styles from "../styles/commonStyles";
import images from "../constants/images";

import Typography from "./Typography";

const Icon = ({ source, action }) => (
  <TouchableOpacity onPress={action}>
    <Image
      source={source}
      style={styles.headerIconStyle}
    />
  </TouchableOpacity>
)

const Header = ({ title, navigation, backAction }) => {

  const goBack = () => {
    backAction?
    backAction?.():
    navigation?.goBack?.(null);
  }
  
  const goHome = () => {
    backAction?.();
    navigation.navigate("Landing");
  }

  return(
    <View style={styles.headerStyles}>
      <Icon
        source={images.back}
        action={goBack}
      />
      <Typography
        type="mega"
        style={styles.headerTitle}
      >
        {title}
      </Typography>
      <Icon
        source={images.home}
        action={goHome}
      />
    </View>
  )
}

export default Header;