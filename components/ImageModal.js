import React, { useEffect, useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

import imgs from "../constants/images";
import Header, { Icon } from "./Header";

const ImageModal = ({
  images,
  visible,
  onClose,
  title,
  index,
  navigation,
  startSlideShow,
  onChange
}) => {

  const data = images.map(img =>({url: `file://${img.data}`}));

  const [slideShow, setSlideShow] = useState(false);
  const [timer, setTimer] = useState(0);
  
  useEffect(() => {
    if(timer){
      clearInterval(timer);
      setTimer(0);
    } else if(slideShow) {
      const slide = startSlideShow();
      setTimer(slide);
    }
  }, [slideShow]);

  const onImageChange = (i) => {
    if(!slideShow){
      onChange(i)
    }
  }

  const slideShowHandler = () => {
    setSlideShow(s => !s);
    if(timer){
      clearInterval(timer);
      setTimer(0);
    };
  }

  const close = () => {
    if(timer) clearInterval(timer);
    onClose();
  }

  return(
    <Modal
      visible={visible}
      transparent
      onDismiss={onClose}
      animated
      animationType="slide"
    >
      <ImageViewer
        enableImageZoom
        enableSwipeDown
        useNativeDriver
        imageUrls={data}
        index={index}
        renderIndicator={() => null}
        onCancel={onClose}
        onChange={onImageChange}
        renderHeader={() => slideShow? null: (
          <Header
            navigation={navigation}
            title={title}
            backAction={close}
          />
        )}
        renderFooter={() => (
          <View style={{marginLeft: 50, marginBottom: 30}}>
            <Icon
              source={slideShow? imgs.pause: imgs.play}
              action={slideShowHandler}
            />
          </View>
        )}
      />
    </Modal>
  );
}

export default ImageModal;