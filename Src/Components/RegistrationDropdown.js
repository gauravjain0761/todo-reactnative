import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import Colors from "../Themes/Colors";
import { commonFontStyles } from "../Themes/Fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function RegistrationDropdown({
  setData,
  data,
  value,
  placeholder,
  valueField,
  style,
  placeholderTextColor,
  multiSelect,
  labelField,
}) {
  return (
    <View>
      <Dropdown
        // selectedStyle={{color:colors.gray3}}
        style={[styles.tradetypeviewStyle, style]}
        placeholderStyle={{
          ...commonFontStyles(
            "400",
            16,
            placeholderTextColor
              ? placeholderTextColor
              : Colors.placeholderColor
          ),
        }}
        iconStyle={{ tintColor: Colors.blue }}
        data={data}
        selectedTextStyle={[styles.TitleTextStyle]}
        iconColor={Colors.black}
        // activeColor={colors.Gray300}
        // disable ={runningTradeTypePositions[item.tradeType] && true}
        labelField={labelField ? labelField : valueField}
        valueField={valueField}
        maxHeight={300}
        placeholder={placeholder}
        value={value}
        onChange={(item) => {
          setData(item[valueField]);
        }}
        renderItem={(item) => {
          return (
            <View>
              <Text style={styles.textItem}>
                {item[labelField ? labelField : valueField]}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  placeholderStyle: {
    ...commonFontStyles("400", 16, Colors.placeholderColor),
  },
  TitleTextStyle: {
    ...commonFontStyles("400", 16, Colors.blue),
  },
  tradetypeviewStyle: {
    backgroundColor: Colors.white,
    marginBottom: 3,
    width: "100%",
    height: hp(6),
    // paddingHorizontal: hp(2),
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue,
  },
  textItem: {
    ...commonFontStyles("400", 14, Colors.blue),
    paddingVertical: hp(1),
    paddingHorizontal: hp(3),
  },
  textItem2: {
    ...commonFontStyles("400", 14, Colors.blue),
  },
  selectedItemsDropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp(1),
    paddingHorizontal: hp(3),
    alignItems: "center",
  },
  tickIcon: {
    resizeMode: "contain",
    height: 12,
    width: 12,
  },
});
