import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";

import { StateContext } from "../contexts/StateContext";
import common from "../styles/commonStyles";
import styles from "../styles/landingStyles";
import FileLoader from "../components/FileLoader";

import ImageLayout from "../components/ImageLayout";
import Typography from "../components/Typography";

export default ({ navigation }) => {

  const { state } = useContext(StateContext);
  console.log(state)

  const photos = state.data.data.find(d => (d.name == "photos"));
  const videos = state.data.data.find(d => (d.name == "videos"));

  const viewPhotos = () => navigation.navigate("ImageGallery", photos);
  const viewVideos = () => navigation.navigate("VideoGallery", videos);

  return(
    <View style={common.container}>
      <ImageLayout bg={state.data.background}>
        <View style={styles.wrapper}>
          <Typography weight="medium" type="terra" style={styles.header}>
            {state?.data?.name}
          </Typography>
          <View>
            <TouchableOpacity
              onPress={viewPhotos}
              style={styles.button}
            >
              <Typography type="mega">
                PHOTOS
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={viewVideos}
              style={styles.button}
            >
              <Typography type="mega">
                VIDEOS
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
        <FileLoader />
      </ImageLayout>
    </View>
  );
};