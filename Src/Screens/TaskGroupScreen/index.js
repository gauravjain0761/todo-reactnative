import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import Colors from "../../Themes/Colors";
import { styles } from "./styles";
import Footer from "../../Components/Footer";
import { dummyData, timeStampToDate } from "../../Config/Constatnts";
import firestore from "@react-native-firebase/firestore";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export default function TaskGroupScreen() {
  const [data, setData] = useState([]);
  const [dataTaskGroup, setDataTaskGroup] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const users = await firestore()
      .collection("Users")
      .orderBy("taskGroup")
      .get();

    setData(users.docs);
    var uniqueArray = users.docs.reduce(function (a, d) {
      if (a.indexOf(d._data.taskGroup) === -1) {
        a.push(d._data.taskGroup);
      }
      return a;
    }, []);
    console.log(uniqueArray);
    let temp = [];
    uniqueArray.forEach((item) => {
      temp.push({ group: item, items: [] });
    });
    console.log("temp", temp);

    temp.forEach((item) => {
      users.docs.forEach((element) => {
        if (element._data.taskGroup == item.group) {
          item.items.push(element._data);
        }
      });
    });
    console.log("temp", temp);
    setDataTaskGroup(temp);
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
            <Text style={styles.title}>TASK GROUPS</Text>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.title}>DATE</Text>
          </View>
        </View>
        <FlatList
          data={dataTaskGroup}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AllTaskGroupListScreen", {
                    group: item.group,
                  })
                }
                key={index}
                style={styles.row}
              >
                <View style={styles.leftView}>
                  <Text style={styles.taskText}>{item.group}</Text>
                </View>
                <View style={styles.rightView}>
                  <Text style={styles.dateText}>
                    {"View"}
                    {/* {" "}
                    {moment(
                      timeStampToDate(item._data?.dueDate?.seconds)
                    ).format("DD-MM-YYYY")} */}
                  </Text>
                </View>
              </TouchableOpacity>
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
