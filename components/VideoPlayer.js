import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "../styles/galleryStyles";

const VideoPlayer = ({ item, onPress }) => {

  return(
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={styles.videoWrapper}
    >
      <Image
        source={{uri: `file://${item?.data}`}}
        style={styles.videoThumbnail}
      />
    </TouchableOpacity>
  )
}

export default VideoPlayer;