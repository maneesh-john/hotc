import React, { useState } from "react";
import { View, FlatList } from "react-native";

import common from "../styles/commonStyles";
import styles from "../styles/galleryStyles";

import ImageLayout from "../components/ImageLayout";
import Header from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import VideoModal from "../components/VideoModal";

const initState = { visible: false, video: {} };

export default ({ navigation, route }) => {

  const [state, setState] = useState(initState);
  const { data, background } = route.params;

  const onPress = (data) => {
    setState({ visible: true, video: data });
  }

  return(
    <View style={common.container}>
      <ImageLayout bg={background}>
      <Header navigation={navigation} title="VIDEOS" />
        <View style={styles.galleryWrapper}>
          <FlatList
            horizontal
            data={data}
            keyExtractor={item => item.name}
            renderItem={({item}) => <VideoPlayer onPress={onPress} item={item} />}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </ImageLayout>
      {state.visible && <VideoModal
        visible={state.visible}
        onClose={() => setState(initState)}
        video={state.video}
        navigation={navigation}
      />}
    </View>
  );
};