import { StyleSheet } from "react-native";

import { colors, fonts, sizes, calc } from "../constants";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    paddingVertical: calc.wp(18)
  },
  header: {
    marginBottom: calc.wp(12),
    textTransform: "uppercase"
  },
  button: {
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    borderWidth: 4,
    borderRadius: 2,
    borderColor: colors.white,
    marginBottom: calc.wp(7)
  }
});