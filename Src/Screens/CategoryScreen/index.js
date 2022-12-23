import { View, Text, FlatList } from "react-native";
import React from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { styles } from "./styles";
import Footer from "../../Components/Footer";
import { dummyData } from "../../Config/Constatnts";

export default function CategoryScreen() {
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
          data={dummyData}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.row}>
              <View style={styles.leftView}>
                <Text style={styles.taskText}>{item.task}</Text>
              </View>
              <View style={styles.rightView}>
                <Text style={styles.dateText}>{item.category}</Text>
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
