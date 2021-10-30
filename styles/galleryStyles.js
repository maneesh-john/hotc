import { StyleSheet } from "react-native";

import { colors, fonts, sizes, dimensions, calc } from "../constants";

export default StyleSheet.create({
  galleryWrapper: {
    flex: 1,
    paddingLeft: calc.wp(7)
  },
  listContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  galleryItem: {
    height: calc.hp(33),
    width: calc.hp(28),
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 2,
    marginRight: 5
  },
  galleryImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },
  galleryItemOverlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,.24)",
    justifyContent: "flex-end"
  },
  galleryItemTitle: {
    textAlign: "center",
    fontFamily: fonts.bold,
    textTransform: "uppercase",
    marginBottom: calc.hp(3)
  },
  galleryListContainer: {
    flex: 1,
  },
  galleryListImage: {
    position: "relative",
    flex: 1/3,
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: colors.white
  },
  innerImage: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  videoWrapper: {
    width: 405,
    height: 270,
    borderRadius: 2,
    overflow: "hidden",
    borderWidth: 1,
    marginRight: 5,
    borderColor: colors.white,
    backgroundColor: colors.black
  },
  videoThumbnail: {
    height: 270,
    width: 405,
    resizeMode: "contain"
  },
  imageWrap: {
    width: "33%"
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 1
  }
});