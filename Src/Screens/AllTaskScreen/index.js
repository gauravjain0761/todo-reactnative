import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function AllTaskScreen() {
  const navigation = useNavigation();
  return (
    <View style={ApplicationStyles.applicationView}>
      <View style={styles.mainView}>
        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text style={styles.title}>TASK</Text>
          </View>
          <View style={styles.rightView}>
            <Image
              style={styles.checkBox}
              source={require("../../Images/checkbox.png")}
            />
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
              <TouchableOpacity style={styles.rightView}>
                <Image
                  style={styles.checkBox}
                  source={require("../../Images/checkbox.png")}
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
          <Text style={styles.completedText}>Completed</Text>
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
