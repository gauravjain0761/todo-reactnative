import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { dummyData } from "../../Config/Constatnts";

export default function AllTaskScreen() {
  const [dummyDataSet, setdummyDataSet] = useState(dummyData);
  const [allCheck, setallCheck] = useState(false);
  const navigation = useNavigation();

  const updateData = (index) => {
    let data = Object.assign([], dummyDataSet);
    data[index].isChecked = !data[index].isChecked;
    setdummyDataSet(data);
  };

  useEffect(() => {
    let data = Object.assign([], dummyDataSet);
    data.forEach((item) => (item.isChecked = allCheck));
    setdummyDataSet(data);
  }, [allCheck]);

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
          data={dummyDataSet}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.row}>
              <View style={styles.leftView}>
                <Text style={styles.taskText}>{item.task}</Text>
              </View>
              <TouchableOpacity
                onPress={() => updateData(index)}
                style={styles.rightView}
              >
                <Image
                  style={styles.checkBox}
                  source={
                    item.isChecked == true
                      ? require("../../Images/checkbox.png")
                      : require("../../Images/unchecked.png")
                  }
                />
              </TouchableOpacity>
            </View>
          )}
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
        <TouchableOpacity
          onPress={() => navigation.navigate("CompletedScreen")}
          style={styles.completedButton}
        >
          {/* <Text style={styles.completedText}>Completed</Text> */}
        </TouchableOpacity>
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
