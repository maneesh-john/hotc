import React from "react";
import { TouchableOpacity, Image } from "react-native";
import Player from "react-native-video-player";

import styles from "../styles/galleryStyles";

const FullScreenPlayer = ({ source, thumbnail }) => {
  return(
    <Player
      video={{uri: source}}
      thumbnail={{uri: `file://${thumbnail}`}}
      customStyles={{
        wrapper: {
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 100
        }
      }}
    />
  )
}

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