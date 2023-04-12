import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
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
    let temp = [];
    uniqueArray.forEach((item) => {
      temp.push({ group: item, items: [] });
    });

    temp.forEach((item) => {
      users.docs.forEach((element) => {
        if (element._data.taskGroup == item.group) {
          item.items.push(element._data);
        }
      });
    });
    setDataTaskGroup(temp);
  };
  const onDeleteTasks = async (item) => {
    const users = await firestore()
      .collection("Users")
      .where("taskGroup", "==", item.group)
      .get()
      .then(function (querySnapshot) {
        // Once we get the results, begin a batch
        console.log(querySnapshot);
        var batch = firestore().batch();

        querySnapshot.forEach(function (doc) {
          console.log(doc);
          // For each doc, add a delete operation to the batch
          batch.delete(doc.ref);
        });

        // Commit the batch
        return batch.commit();
      })
      .then(function () {
        // Delete completed!
        // ...
        console.log("completed");
        getData();
      });

    console.log(users.docs);
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
              <View key={index} style={styles.row}>
                <View style={styles.leftView}>
                  <Text style={styles.taskText}>{item.group}</Text>
                </View>
                <View style={styles.rightView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("AllTaskGroupListScreen", {
                        group: item.group,
                      });
                    }}
                    style={{ paddingHorizontal: 10 }}
                  >
                    <Image
                      style={styles.icons}
                      source={require("../../Images/eye.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      onDeleteTasks(item);
                    }}
                    style={{ paddingHorizontal: 10 }}
                  >
                    <Image
                      style={styles.icons}
                      source={require("../../Images/trash.png")}
                    />
                  </TouchableOpacity>
                  {/* <Text style={styles.dateText}>
                    {"View"}
                    {" "}
                    {moment(
                      timeStampToDate(item._data?.dueDate?.seconds)
                    ).format("DD-MM-YYYY")}
                  </Text> */}
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
