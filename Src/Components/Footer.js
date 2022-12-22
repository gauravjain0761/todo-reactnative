import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import ApplicationStyles from "../Themes/ApplicationStyles";

export default function Footer() {
  return (
    <View style={ApplicationStyles.footerButton}>
      <TouchableOpacity style={ApplicationStyles.arrowButton}>
        <Image
          style={ApplicationStyles.arrowIcon}
          source={require("../Images/leftarrow.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={ApplicationStyles.arrowButton}>
        <Image
          style={ApplicationStyles.arrowIcon}
          source={require("../Images/rightarrow.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
