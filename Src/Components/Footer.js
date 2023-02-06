import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import ApplicationStyles from "../Themes/ApplicationStyles";

export default function Footer({ onPressLeft, onPressRight }) {
  return (
    <View style={ApplicationStyles.footerButton}>
      <TouchableOpacity
        onPress={onPressLeft}
        style={ApplicationStyles.arrowButton}
      >
        <Image
          style={ApplicationStyles.arrowIcon}
          source={require("../Images/leftarrow.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressRight}
        style={ApplicationStyles.arrowButton}
      >
        <Image
          style={ApplicationStyles.arrowIcon}
          source={require("../Images/rightarrow.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
