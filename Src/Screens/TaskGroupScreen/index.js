import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import Colors from "../../Themes/Colors";
import { styles } from "./styles";
import Footer from "../../Components/Footer";
import { dummyData, timeStampToDate } from "../../Config/Constatnts";
import firestore from "@react-native-firebase/firestore";
import moment from "moment";

export default function TaskGroupScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const users = await firestore()
      .collection("Users")
      .orderBy("taskGroup")
      .get();

    setData(users.docs);
  };

  return (
    <View style={ApplicationStyles.applicationView}>
      <View style={styles.mainView}>
        {/* <Text style={styles.gropuName}>TASK GROUP NAME</Text> */}
        <View
          style={[
            styles.row,
            { borderTopColor: Colors.placeholderColor, borderTopWidth: 1 },
          ]}
        >
          <View style={styles.leftView}>
            <Text style={styles.title}>TASK</Text>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.title}>DATE</Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.row}>
              <View style={styles.leftView}>
                <Text style={styles.taskText}>{item._data.taskName}</Text>
              </View>
              <View style={styles.rightView}>
                <Text style={styles.dateText}>
                  {" "}
                  {moment(timeStampToDate(item._data?.dueDate?.seconds)).format(
                    "DD-MM-YYYY"
                  )}
                </Text>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Footer />
    </View>
  );
}
