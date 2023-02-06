import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { styles } from "./styles";
import Footer from "../../Components/Footer";
import { dummyData } from "../../Config/Constatnts";
import Colors from "../../Themes/Colors";
import firestore from "@react-native-firebase/firestore";

export default function PriorityLevelScreen() {
  const [data, setData] = useState([]);

  // let data = [
  //   "Urgent",
  //   "Urgent",
  //   "Urgent",
  //   "High",
  //   "High",
  //   "Medium",
  //   "Medium",
  //   "Low",
  //   "Low",
  //   "Low",
  //   "Very Low",
  //   "Very Low",
  //   "Very Low",
  //   "No",
  //   "No",
  //   "No",
  // ];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const users = await firestore()
      .collection("Users")
      .orderBy("priorityLevel")
      .get();
    console.log("users.docs", users.docs.length);
    setData(users.docs);
  };

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
            let data = item._data;
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
                  <Text style={styles.taskText}>{data.taskName}</Text>
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
                    {data.priorityLevel}
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
