import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DashboardScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(async () => {
    dispatch({ type: "PRE_LOADER", payload: { preLoader: true } });
    let data = await getData();
    if (data == null) {
      const jsonValue = JSON.stringify([
        { id: 1, strategicName: "SUPERTREND" },
        { id: 2, strategicName: "VWAP" },
        { id: 3, strategicName: "RSIMA" },
        { id: 4, strategicName: "TESTING" },
        { id: 5, strategicName: "DEMATADE" },
      ]);
      await AsyncStorage.setItem("taskGroupData", jsonValue);
    }
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("taskGroupData");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      return null;
    }
  };

  return (
    <View style={ApplicationStyles.applicationView}>
      <View style={styles.newTaskButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NewTaskScreen")}
          style={styles.circleButton}
        >
          <Text style={styles.newTaskButtonText}>NEW{"\n"}TASK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.viewText}>VIEW BY</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("DateDueScreen")}
          style={styles.buttonRow}
        >
          <View>
            <LinearGradient
              colors={["#192f6a", "#4c669f"]}
              style={styles.linearGradient}
            ></LinearGradient>
          </View>
          <View>
            <Text style={styles.rowText}>DATE DUE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PriorityLevelScreen")}
          style={styles.buttonRow}
        >
          <View>
            <LinearGradient
              colors={["#192f6a", "#4c669f"]}
              style={styles.linearGradient}
            ></LinearGradient>
          </View>
          <View>
            <Text style={styles.rowText}>PRIORITY LEVEL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CategoryScreen")}
          style={styles.buttonRow}
        >
          <View>
            <LinearGradient
              colors={["#192f6a", "#4c669f"]}
              style={styles.linearGradient}
            ></LinearGradient>
          </View>
          <View>
            <Text style={styles.rowText}>CATEGORY</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("TaskGroupScreen")}
          style={styles.buttonRow}
        >
          <View>
            <LinearGradient
              colors={["#192f6a", "#4c669f"]}
              style={styles.linearGradient}
            ></LinearGradient>
          </View>
          <View>
            <Text style={styles.rowText}>TASK GROUP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AllTaskScreen")}
          style={styles.buttonRow}
        >
          <View>
            <LinearGradient
              colors={["#192f6a", "#4c669f"]}
              style={styles.linearGradient}
            ></LinearGradient>
          </View>
          <View>
            <Text style={styles.rowText}>ALL TASKS</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
