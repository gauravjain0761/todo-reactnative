import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Colors from "../../Themes/Colors";
import { commonFontStyles } from "../../Themes/Fonts";

export const styles = StyleSheet.create({
  mainView: { paddingHorizontal: hp(1.5), flex: 1 },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.placeholderColor,
    alignItems: "center",
    flexDirection: "row",
  },
  leftView: {
    width: "65%",
    paddingVertical: hp(1.5),
    borderRightWidth: 1,
    borderRightColor: Colors.placeholderColor,
  },
  rightView: {
    width: "35%",
    alignItems: "center",
    paddingVertical: hp(1.5),
  },
  title: {
    ...commonFontStyles("bold", 18, Colors.blue),
  },
  taskText: {
    ...commonFontStyles("400", 14, Colors.blue),
  },
  dateText: {
    ...commonFontStyles("400", 14, Colors.placeholderColor),
  },
});
