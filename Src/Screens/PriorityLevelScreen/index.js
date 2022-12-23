import { View, Text, FlatList } from "react-native";
import React from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { styles } from "./styles";
import Footer from "../../Components/Footer";
import { dummyData } from "../../Config/Constatnts";
import Colors from "../../Themes/Colors";

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
          data={dummyData}
          renderItem={({ item, index }) => {
            let color = "white";
            if (item.priority == "Urgent") color = "#ba2d32";
            else if (item.priority == "High") color = "#d65f33";
            else if (item.priority == "Medium") color = "#d6cb33";
            else if (item.priority == "Low") color = "#308723";
            else if (item.priority == "Very Low") color = "#232b87";
            else if (item.priority == "No Priority") color = "white";
            return (
              <View key={index} style={styles.row}>
                <View style={styles.leftView}>
                  <Text style={styles.taskText}>{item.task}</Text>
                </View>
                <View style={styles.rightView}>
                  <Text
                    style={[
                      styles.dateText,
                      {
                        backgroundColor: color,
                        color: color == "white" ? Colors.black : Colors.white,
                      },
                    ]}
                  >
                    {item.priority}
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
