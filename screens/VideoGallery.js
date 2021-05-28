import React from "react";
import { View, FlatList } from "react-native";

import common from "../styles/commonStyles";
import styles from "../styles/galleryStyles";

import ImageLayout from "../components/ImageLayout";
import Header from "../components/Header";
import GalleryItem from "../components/GalleryItem";

export default ({ navigation, route }) => {

  const { data, name, background } = route.params;

  const viewGallery = (item) => navigation.navigate("Videos", item);

  return(
    <View style={common.container}>
      <ImageLayout bg={background}>
        <Header navigation={navigation} title={name} />
        <View style={styles.galleryWrapper}>
          <FlatList
            horizontal
            data={data}
            keyExtractor={item => item.name}
            renderItem={({item}) => <GalleryItem onPress={viewGallery} item={item} />}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </ImageLayout>
    </View>
  );
};