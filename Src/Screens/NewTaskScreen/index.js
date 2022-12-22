import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { useDispatch } from "react-redux";
import Colors from "../../Themes/Colors";
import { styles } from "./styles";

export default function NewTaskScreen() {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [duedate, setDuedate] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [taskGroup, setTaskGroup] = useState("");

  return (
    <View style={ApplicationStyles.applicationView}>
      <View style={styles.mainView}>
        <View>
          <TextInput
            value={taskName}
            onChangeText={(text) => setTaskName(text)}
            style={styles.textInput}
            placeholderTextColor={Colors.placeholderColor}
            placeholder={"Enter task name"}
          />
          <Text style={styles.bottomName}>TASK NAME</Text>
        </View>
        <View>
          <TextInput
            value={duedate}
            onChangeText={(text) => setDuedate(text)}
            style={styles.textInput}
            placeholderTextColor={Colors.placeholderColor}
            placeholder={"Enter Due Date"}
          />
          <Text style={styles.bottomName}>DUE DATE</Text>
        </View>
        <View>
          <TextInput
            value={priority}
            onChangeText={(text) => setPriority(text)}
            style={styles.textInput}
            placeholderTextColor={Colors.placeholderColor}
            placeholder={"Enter Priority Level"}
          />
          <Text style={styles.bottomName}>PRIORITY LEVEL</Text>
        </View>
        <View>
          <TextInput
            value={category}
            onChangeText={(text) => setCategory(text)}
            style={styles.textInput}
            placeholderTextColor={Colors.placeholderColor}
            placeholder={"Enter Category"}
          />
          <Text style={styles.bottomName}>CATEGORY</Text>
        </View>
        <View>
          <TextInput
            value={taskGroup}
            onChangeText={(text) => setTaskGroup(text)}
            style={styles.textInput}
            placeholderTextColor={Colors.placeholderColor}
            placeholder={"Enter Task Group"}
          />
          <Text style={styles.bottomName}>TASK GROUP</Text>
        </View>
      </View>
    </View>
  );
}
