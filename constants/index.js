import { Dimensions } from "react-native";

const colors = {
  primaryBg: "#474747",
  black: "#000",
  white: "#fff"
}

const sizes = {
  pico: 10,
  nano: 15,
  micro: 20,
  milli: 25,
  kilo: 30,
  mega: 35,
  giga: 45,
  terra: 60
}

const dimensions = {
  sy: Dimensions.get("screen").height,
  sx: Dimensions.get("screen").width,
  wy: Dimensions.get("window").height,
  wx: Dimensions.get("window").width,
}

const fonts = {
  medium: "Futura-Medium",
  bold: "Futura-Bold"
}

const calc = {
  hp: (num) => (dimensions.wx / 100) * num,
  wp: (num) => (dimensions.wy / 100) * num
}

export { colors, sizes, dimensions, fonts, calc };