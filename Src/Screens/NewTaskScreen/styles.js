import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Colors from "../../Themes/Colors";
import { commonFontStyles } from "../../Themes/Fonts";

export const styles = StyleSheet.create({
  mainView: {
    padding: hp(1.5),
  },
  textInput: {
    ...commonFontStyles("400", 16, Colors.blue),
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue,
    height: hp(6),
    justifyContent: "center",
    marginBottom: 3,
  },
  bottomName: {
    ...commonFontStyles("400", 14, Colors.placeholderColor),
    marginBottom: hp(2),
  },
  dateText: { ...commonFontStyles("400", 16, Colors.blue) },
  placeholder: { ...commonFontStyles("400", 16, Colors.placeholderColor) },
});
