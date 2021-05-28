import React from "react";
import { Text, StyleSheet } from "react-native";

import { colors, fonts, sizes } from "../constants/index";

const Typography = ({ children, type, textColor, weight, style, lines }) => {

  const color = textColor || "white";
  const size = type || "kilo";
  const font = weight || "medium";

  return(
    <Text
      numberOfLines={lines || 0}
      style={[styles(color,size, font).textStyle, style]}
    >
      {children}
    </Text>
  );
}

const styles = (color, size, font) => StyleSheet.create({
  textStyle: {
    color: colors[color],
    fontSize: sizes[size],
    fontFamily: fonts[font]
  }
});

export default Typography;