import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { styles } from "./styles";
import Footer from "../../Components/Footer";
import { dummyData } from "../../Config/Constatnts";
import firestore from "@react-native-firebase/firestore";

export default function CategoryScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await firestore()
      .collection("Users")
      .orderBy("category")
      .onSnapshot((res) => {
        let userData = [];
        res?.forEach((doc) => {
          const obj = {
            data: doc.data(),
            id: doc?.id,
          };
          userData.push(obj);
        });
        setData(userData);
      });
  };

  return (
    <View style={ApplicationStyles.applicationView}>
      <View style={styles.mainView}>
        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text style={styles.title}>TASK</Text>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.title}>CATEGORY</Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.row}>
              <View style={styles.leftView}>
                <Text style={styles.taskText}>{item.data.taskName}</Text>
              </View>
              <View style={styles.rightView}>
                <Text style={styles.dateText}>{item.data.category}</Text>
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
