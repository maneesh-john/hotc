import React, { useState } from "react";
import { Modal, View } from "react-native";
import VideoPlayer from "react-native-video";

import styles from "../styles/playerStyles";
import Header from "./Header";
// import Controls from "./Controls";

const VideoModal = ({
  visible,
  onClose,
  video,
  navigation
}) => {

  const [show, setShow] = useState(true);
  const { path } = video;

  // const [paused, setPaused] = useState(false);
  // const [fullscreen, setFullscreen] = useState(false);
  // const [progress, setProgress] = useState(0);
  // const [duration, setDuration] = useState(0);
  // let playerRef = {};

  // const handlePaused = () => {
  //   if(progress >= 1){
  //     playerRef?.seek?.(0);
  //   }
  //   setPaused(p => !p);
  // }

  // const handleProgress = (progress) => {
  //   setProgress(progress.currentTime / duration);
  // }

  // const handleEnd = () => {
  //   setPaused(true);
  //   onClose();
  // }

  // const handleLoad = (meta) => {
  //   setDuration(meta.duration);
  // }

  // const handleSeek = (e) => {
  //   const position = e.nativeEvent.locationX;
  //   const prog = (position/600) * duration;
  //   playerRef.seek(prog);
  // }

  // const handleFullscreen = () => {
  //   setFullscreen(f => !f);
  // }

  return(
    <Modal
      visible={visible}
      transparent
      onDismiss={onClose}
      animated
      animationType="slide"
    >
      {show &&<Header
        backAction={onClose}
        navigation={navigation}
      />}
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <VideoPlayer
            source={{uri: `file://${path}`}}
            style={{flex: 1, backgroundColor: "black"}}
            resizeMode="contain"
            fullscreenOrientation="landscape"
            style={styles.player}
            controls={true}
            // paused={paused}
            // onLoad={handleLoad}
            // onProgress={handleProgress}
            // onEnd={handleEnd}
            // fullscreen={fullscreen}
            // ref={ref => playerRef = ref}
          />
          {/* <Controls
            paused={paused}
            handlePaused={handlePaused}
            progress={progress}
            handleSeek={handleSeek}
            duration={duration}
            fullscreen={fullscreen}
            handleFullscreen={handleFullscreen}
          /> */}
        </View>
      </View>
    </Modal>
  );
}

export default VideoModal;