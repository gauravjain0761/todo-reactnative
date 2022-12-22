import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Colors from "../../Themes/Colors";
import { commonFontStyles } from "../../Themes/Fonts";

export const styles = StyleSheet.create({
  newTaskButton: {
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: Colors.placeholderColor,
  },
  circleButton: {
    backgroundColor: Colors.black,
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  newTaskButtonText: {
    ...commonFontStyles("500", 16, Colors.lightGreen),
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(1.5),
  },
  bottomView: {
    padding: hp(2),
  },
  viewText: {
    ...commonFontStyles("bold", 18, Colors.black),
    marginBottom: hp(2),
  },
  linearGradient: {
    // flex: 1,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: hp(1.5),
  },
  rowText: {
    ...commonFontStyles("400", 18, Colors.black),
  },
});
