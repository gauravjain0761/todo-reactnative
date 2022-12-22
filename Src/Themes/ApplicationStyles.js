import { StyleSheet } from "react-native";
import Colors from "./Colors";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export default StyleSheet.create({
  applicationView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  footerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(2),
    borderTopWidth: 1,
  },
  arrowButton: { paddingHorizontal: hp(1) },
  arrowIcon: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
});
