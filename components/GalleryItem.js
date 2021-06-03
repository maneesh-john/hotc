import React from "react";
import { TouchableOpacity, ImageBackground, View } from "react-native";

import styles from "../styles/galleryStyles";

import Typography from "./Typography";

const GalleryItem = ({ item, onPress }) => {

  const { name, data } = item;

  const handlePress = () => onPress(item);

  let image = data?.[0]?.data;
  if(typeof image === "string"){
    image = { uri: `file://${image}` };
  }

  return(
    <TouchableOpacity
      style={styles.galleryItem}
      onPress={handlePress}
    >
      <ImageBackground
        source={image}
        style={styles.galleryImage}
      >
        <View style={styles.galleryItemOverlay}>
          <Typography style={styles.galleryItemTitle}>{name}</Typography>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default GalleryItem;