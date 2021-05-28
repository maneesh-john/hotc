import { StyleSheet } from "react-native";

import { colors, fonts, sizes, dimensions, calc } from "../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBg
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.4)"
  },
  logo: {
    height: 76,
    width: 60,
    position: "absolute",
    bottom: "3%",
    right: "5%"
  },
  bold: {
    fontFamily: fonts.bold
  },
  mediumFont: {
    fontFamily: fonts.medium
  },
  headerStyles: {
    flexDirection: "row",
    width: "100%",
    height: calc.hp(12),
    paddingHorizontal: calc.wp(5),
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 10
  },
  headerIconStyle: {
    height: sizes.terra,
    width: sizes.terra,
    resizeMode: "contain"
  },
  headerTitle: {
    fontFamily: fonts.medium,
    textTransform: "uppercase"
  },
  loader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.5)",
    alignItems: "center",
    justifyContent: "center"
  }
});