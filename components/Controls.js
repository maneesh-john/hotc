import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import ProgressBar from "react-native-progress/Bar";

import styles from "../styles/playerStyles";
import images from "../constants/images";
import Typography from "./Typography";

const Icon = ({ source, styles }) => {
  return(
    <Image
      source={source}
      style={styles}
    />
  )
}

const Controls = ({
  paused,
  handlePaused,
  progress,
  handleSeek,
  duration,
  fullscreen,
  handleFullscreen
}) => {

  const handleDuration = () => {
    const secs = Math.floor(progress * duration);
    const totalSecs = Math.floor(duration);
    const mins = Math.floor(secs/60);
    const totalMins = Math.floor(totalSecs/60);
    const m = (mins.toString().length > 1)? mins : "0"+mins;
    const s = (secs.toString().length > 1)? secs : "0"+secs;
    const m2 = (totalMins.toString().length > 1)? totalMins : "0"+totalMins;
    const s2 = (totalSecs.toString().length > 1)? totalSecs : "0"+totalSecs;
    return `${m}:${s}/${m2}:${s2}`;
  }

  return(
    <View style={styles.mainControl}>
      <View style={styles.topControls}>
        <TouchableWithoutFeedback onPress={handleFullscreen}>
          <Image
            source={fullscreen? images.shrink: images.enlarge}
            style={{height: 40, width: 40}}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.bottomControls}>
        <TouchableWithoutFeedback onPress={handlePaused}>
          <Image
            source={paused? images.play: images.pause}
            style={{height: 40, width: 40}}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleSeek}>
          <ProgressBar
            progress={progress}
            color="#aaa"
            unfilledColor="rgba(255,255,255,.4)"
            width={600}
            height={10}
            borderRadius={10}
          />
        </TouchableWithoutFeedback>
        <Typography type="micro">{handleDuration()}</Typography>
      </View>
    </View>
  );
}

export default Controls;