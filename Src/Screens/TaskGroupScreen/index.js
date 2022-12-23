import { View, Text, FlatList } from "react-native";
import React from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import Colors from "../../Themes/Colors";
import { styles } from "./styles";
import Footer from "../../Components/Footer";
import { dummyData } from "../../Config/Constatnts";

export default function TaskGroupScreen() {
  return (
    <View style={ApplicationStyles.applicationView}>
      <View style={styles.mainView}>
        <Text style={styles.gropuName}>TASK GROUP NAME</Text>
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
          data={dummyData}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.row}>
              <View style={styles.leftView}>
                <Text style={styles.taskText}>{item.task}</Text>
              </View>
              <View style={styles.rightView}>
                <Text style={styles.dateText}>{item.date}</Text>
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
