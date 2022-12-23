import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { useDispatch } from "react-redux";
import Colors from "../../Themes/Colors";
import { styles } from "./styles";
import RegistrationDropdown from "../../Components/RegistrationDropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
const citydata = [
  {
    id: 1,
    strategicName: "SUPERTREND",
  },
  { id: 2, strategicName: "VWAP" },
  { id: 3, strategicName: "RSIMA" },
  { id: 6, strategicName: "TESTING" },
  { id: 10, strategicName: "DEMATADE" },
];
export default function NewTaskScreen() {
  const [taskName, setTaskName] = useState("");
  const [duedate, setDuedate] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [taskGroup, setTaskGroup] = useState("");
  const [picker, setPicker] = useState(false);
  const handleConfirm = (date) => {
    setDuedate(date);
    setPicker(false);
  };
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
          <TouchableOpacity
            onPress={() => setPicker(true)}
            style={styles.textInput}
          >
            <Text style={duedate ? styles.dateText : styles.placeholder}>
              {duedate
                ? moment(duedate).format("MM/DD/YYYY")
                : "Enter Due Date"}
            </Text>
          </TouchableOpacity>

          <Text style={styles.bottomName}>DUE DATE / RECURRING</Text>
        </View>
        <View>
          <RegistrationDropdown
            data={citydata}
            value={priority}
            setData={(text) => {
              setPriority(text);
            }}
            placeholder={"Select Priority"}
            valueField={"strategicName"}
          />
          <Text style={styles.bottomName}>PRIORITY LEVEL</Text>
        </View>
        <View>
          <RegistrationDropdown
            data={citydata}
            value={category}
            setData={(text) => {
              setCategory(text);
            }}
            placeholder={"Select Category"}
            valueField={"strategicName"}
          />
          <Text style={styles.bottomName}>CATEGORY</Text>
        </View>
        <View>
          <RegistrationDropdown
            data={citydata}
            value={taskGroup}
            setData={(text) => {
              setTaskGroup(text);
            }}
            placeholder={"Select Task Group"}
            valueField={"strategicName"}
          />
          <Text style={styles.bottomName}>TASK GROUP</Text>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={picker}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setPicker(false)}
      />
    </View>
  );
}
