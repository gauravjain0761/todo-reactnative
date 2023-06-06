import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { dummyData } from "../../Config/Constatnts";
import firestore from "@react-native-firebase/firestore";

export default function ArchivedScreen() {
  const [dummyDataSet, setdummyDataSet] = useState(dummyData);
  const [allData, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const [allCheck, setallCheck] = useState(false);
  const navigation = useNavigation();

  const updateData = (item, index) => {
    firestore()
      .collection("Users")
      .doc(item.id)
      .update({
        isChecked: !item.data.isChecked,
      })
      .then(() => {
        console.log("User updated!");
      });

    item.data.isChecked = !item.data.isChecked;
    setData([...allData]);
  };

  const getData = async () => {
    await firestore()
      .collection("Users")
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
          <TouchableOpacity
            onPress={() => setallCheck(!allCheck)}
            style={styles.rightView}
          >
            <Image
              style={styles.checkBox}
              source={
                allCheck == true
                  ? require("../../Images/checkbox.png")
                  : require("../../Images/unchecked.png")
              }
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={allData}
          renderItem={({ item, index }) => {
            if (item.data.isChecked) {
              return (
                <View key={index} style={styles.row}>
                  <View style={styles.leftView}>
                    <Text style={styles.taskText}>{item.data.taskName}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => updateData(item, index)}
                    style={styles.rightView}
                  >
                    <Image
                      style={styles.checkBox}
                      source={
                        item.data.isChecked
                          ? require("../../Images/checkbox.png")
                          : require("../../Images/unchecked.png")
                      }
                    />
                  </TouchableOpacity>
                </View>
              );
            }
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={ApplicationStyles.footerButton}>
        <TouchableOpacity style={ApplicationStyles.arrowButton}>
          <Image
            style={ApplicationStyles.arrowIcon}
            source={require("../../Images/leftarrow.png")}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("CompletedScreen")}
          style={styles.completedButton}
        >
        </TouchableOpacity> */}
        <TouchableOpacity style={ApplicationStyles.arrowButton}>
          <Image
            style={ApplicationStyles.arrowIcon}
            source={require("../../Images/rightarrow.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
