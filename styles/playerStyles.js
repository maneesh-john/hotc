import { StyleSheet } from "react-native";

import { dimensions } from "../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "flex-end",
    justifyContent: "center",
    zIndex: 1
  },
  wrapper: {
    width: "100%",
    height: dimensions.wy * (9/16),
    position: "relative"
  },
  player: {
    width: "100%",
    height: dimensions.wy * (9/16)
  },
  mainControl: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%"
  },
  topControls: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.4)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10
  },
  bottomControls: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.4)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10
  }
});