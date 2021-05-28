import React, { useState } from "react";
import { View } from "react-native";
import MasonryList from "react-native-masonry-list";

import common from "../styles/commonStyles";
import styles from "../styles/galleryStyles";

import Header from "../components/Header";
import ImageModal from "../components/ImageModal";

const initState = { visible: false, image: 0 };

export default ({ navigation, route }) => {

  const [state, setState] = useState(initState);

  const { data, name } = route.params;

  const closeModal = () => setState(initState);
  const openModal = (i) => setState({ visible: true, image: i });

  const startSlideShow = () => {
    const timer = setInterval(() => {
      if(state.visible){
        setState(s => {
          return {...s, image: (s.image < (data.length - 1))? (s.image + 1): 0 }
        });
      }
    }, 3000);
    return timer;
  }

  const onImageChange = (i) => {
    setState(s => {
      return {...s, image: i }
    });
  }

  const onSelect = (_, i) => {
    openModal(i);
  }

  // const renderImage = (item, index) => {
  //   const url = `file://${item.data}`;
  //   let ratio = 1;
  
  //   return(
  //       // <ImageBackground
  //       //   source={{ uri: url}}
  //       //   style={[styles.galleryListImage, {aspectRatio: ratio}]}
  //       // >
  //       //   <TouchableOpacity
  //       //     style={styles.innerImage}
  //       //     onPress={() => openModal(index)}
  //       //   />
  //       // </ImageBackground>
  //       <AutoHeightImage
  //         source={{uri: url}}
  //         width={300}
  //       />
  //   );
  // }

  return(
    <View style={common.container}>
      <Header navigation={navigation} title={name} />
        <MasonryList
          images={data}
          columns={3}
          onPressImage={onSelect}
          spacing={.5}
        />
        {state.visible && (
          <ImageModal
            visible={state.visible}
            title={name}
            images={data}
            index={state.image}
            onClose={closeModal}
            navigation={navigation}
            onChange={onImageChange}
            startSlideShow={startSlideShow}
          />
        )}
    </View>
  );
};