import { View, Text, FlatList } from "react-native";
import React from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { styles } from "./styles";
import Footer from "../../Components/Footer";

export default function PriorityLevelScreen() {
  let data = [
    "Urgent",
    "Urgent",
    "Urgent",
    "High",
    "High",
    "Medium",
    "Medium",
    "Low",
    "Low",
    "Low",
    "Very Low",
    "Very Low",
    "Very Low",
    "No",
    "No",
    "No",
  ];
  return (
    <View style={ApplicationStyles.applicationView}>
      <View style={styles.mainView}>
        <View style={styles.row}>
          <View style={[styles.leftView, { paddingVertical: hp(1.5) }]}>
            <Text style={styles.title}>TASK</Text>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.title}>PRIORITY</Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            let color = "white";
            if (item == "Urgent") color = "#f28a8a";
            else if (item == "High") color = "#f2a774";
            else if (item == "Medium") color = "#f2e374";
            else if (item == "Low") color = "#74f274";
            else if (item == "Very Low") color = "#7485f2";
            else if (item == "No") color = "white";
            return (
              <View key={index} style={styles.row}>
                <View style={styles.leftView}>
                  <Text style={styles.taskText}>Sample Task</Text>
                </View>
                <View style={styles.rightView}>
                  <Text style={[styles.dateText, { backgroundColor: color }]}>
                    {item}
                  </Text>
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Footer />
    </View>
  );
}
