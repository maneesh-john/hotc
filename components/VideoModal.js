import React, { useState } from "react";
import { Modal, View } from "react-native";
import Player from "react-native-video-player";
import VideoPlayer from "react-native-video";

import { dimensions } from "../constants";

import Header from "./Header"

const VideoModal = ({
  visible,
  onClose,
  video,
  navigation
}) => {

  const [show, setShow] = useState(true);
  const { path, data } = video;

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
      <View style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "flex-end",
        justifyContent: "center",
        zIndex: 1
      }}>
        {/* <TouchableOpacity
          onPress={onClose}
          style={{
          alignSelf: "flex-start"
        }}>
          <Typography
            textColor="white"
            style={{
              transform: [{rotate: "45deg"}],
              marginRight: 10
          }}>+</Typography>
        </TouchableOpacity> */}
        {/* <Player
          video={{uri: `file://${path}`}}
          thumbnail={{uri: `file://${data}`}}
          resizeMode="cover"
          disableFullscreen
          onStart={() => setShow(false)}
          onEnd={() => onClose()}
          onShowControls={() => {
            setShow(true)
            setTimeout(() => {
              setShow(false)
            }, 3000)
          }}
          customStyles={{
            wrapper: {
              width: "100%"
            }
          }}
        /> */}
        <VideoPlayer
          source={{uri: `file://${path}`}}
          style={{flex: 1, backgroundColor: "black"}}
          resizeMode="contain"
          controls={true}
          fullscreenOrientation="landscape"
          style={{width: "100%", height: dimensions.wy * (9/16)}}
          pictureInPicture={true}
        />
      </View>
    </Modal>
  );
}

export default VideoModal;