import React from "react";
import { View, TouchableOpacity } from "react-native";

import common from "../styles/commonStyles";

import Typography from "../components/Typography";

export default ({ navigation }) => {

  return(
    <View style={common.container}>
      <Typography>Gallery</Typography>
    </View>
  );
}