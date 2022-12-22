import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Colors from "../../Themes/Colors";
import { commonFontStyles } from "../../Themes/Fonts";

export const styles = StyleSheet.create({
  mainView: {
    padding: hp(1.5),
  },
  textInput: {
    ...commonFontStyles("400", 16, Colors.black),
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
    height: hp(6),

    marginBottom: 3,
  },
  bottomName: {
    ...commonFontStyles("400", 14, Colors.placeholderColor),
    marginBottom: hp(2),
  },
});
