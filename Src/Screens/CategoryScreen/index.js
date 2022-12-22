import { View, Text, FlatList } from "react-native";
import React from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { styles } from "./styles";
import Footer from "../../Components/Footer";

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
          data={[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 2, 2.4, 4, 35, 3, 5, 5, 45, 4,
            545, 4, 54, 5, 3,
          ]}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.row}>
              <View style={styles.leftView}>
                <Text style={styles.taskText}>Sample Task</Text>
              </View>
              <View style={styles.rightView}>
                <Text style={styles.dateText}>Category</Text>
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
