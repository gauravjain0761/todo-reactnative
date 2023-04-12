import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { useDispatch } from "react-redux";
import Colors from "../../Themes/Colors";
import { styles } from "./styles";
import RegistrationDropdown from "../../Components/RegistrationDropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const citydata = [
  { id: 1, strategicName: "SUPERTREND" },
  { id: 2, strategicName: "VWAP" },
  { id: 3, strategicName: "RSIMA" },
  { id: 6, strategicName: "TESTING" },
  { id: 10, strategicName: "DEMATADE" },
];

const priorityData = [
  { id: 1, strategicName: "very low" },
  { id: 2, strategicName: "low" },
  { id: 3, strategicName: "medium" },
  { id: 6, strategicName: "high" },
  { id: 10, strategicName: "urgent" },
];

const taskTypeData = [
  { id: 1, strategicName: "Due Date" },
  { id: 2, strategicName: "Recurring" },
];
const recurringData = [
  { id: 1, strategicName: "daily" },
  { id: 2, strategicName: "weekly" },
  { id: 3, strategicName: "bi-weekly" },
  { id: 4, strategicName: "semi-monthly" },
  { id: 5, strategicName: "monthly" },
  { id: 6, strategicName: "quarterly" },
  { id: 7, strategicName: "semi-annually" },
  { id: 8, strategicName: "annually" },
];

const categoryData = [
  { id: 1, strategicName: "financial" },
  { id: 2, strategicName: "personal" },
  { id: 3, strategicName: "work" },
  { id: 6, strategicName: "maintenance" },
  { id: 10, strategicName: "general" },
];

export default function NewTaskScreen() {
  const { goBack } = useNavigation();
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("");
  const [recurringDate, setRecurringDate] = useState("");
  const [duedate, setDuedate] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [taskGroup, setTaskGroup] = useState("");
  const [picker, setPicker] = useState(false);
  const handleConfirm = (date) => {
    setDuedate(date);
    setPicker(false);
  };

  const userCollection = firestore().collection("Users");
  const [lastDocument, setLastDocument] = useState();

  const onPressAdd = () => {
    // let query = userCollection.orderBy("taskName"); // sort the data

    // if (lastDocument !== undefined) {
    //   query = query.startAfter(lastDocument); // fetch data following the last document accessed
    // }

    // query
    //   .limit(3) // limit to your page size, 3 is just an example
    //   .get()
    //   .then((querySnapshot) => {
    //     console.log("querySnapshot", querySnapshot.docs);
    //     setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1]);
    //     // MakeUserData(querySnapshot.docs);
    //   });
    // console.log("duedate", duedate);
    if (isEmpty(taskName)) {
      Alert.alert("Please enter the task name");
    } else if (taskType == "") {
      Alert.alert("Please select task type");
    } else if (taskType == "Due Date" && duedate == "") {
      Alert.alert("Please select due date");
    } else if (taskType == "Recurring" && recurringDate == "") {
      Alert.alert("Please select recurring");
    } else if (isEmpty(priority)) {
      Alert.alert("Please enter the priority");
    } else if (isEmpty(category)) {
      Alert.alert("Please enter the category");
    } else if (isEmpty(taskGroup)) {
      Alert.alert("Please enter the task group");
    } else {
      let data = {
        taskName: taskName,

        priorityLevel: priority,
        category: category,
        taskGroup: taskGroup,
        taskType: taskType,
      };
      if (taskType == "Due Date") {
        data.dueDate = duedate;
      } else {
        data.recurring = recurringDate;
      }
      firestore()
        .collection("Users")
        .add(data)
        .then(() => {
          Alert.alert("New List Added");
          goBack();
          console.log("User added!");
        });
    }
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
          <RegistrationDropdown
            data={taskTypeData}
            value={taskType}
            setData={(text) => {
              setTaskType(text);
            }}
            placeholder={"Select Task Type"}
            valueField={"strategicName"}
          />
          <Text style={styles.bottomName}>DUE DATE / RECURRING</Text>
        </View>
        {taskType == "Due Date" ? (
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

            <Text style={styles.bottomName}>DUE DATE</Text>
          </View>
        ) : taskType !== "" ? (
          <View>
            <RegistrationDropdown
              data={recurringData}
              value={recurringDate}
              setData={(text) => {
                setRecurringDate(text);
              }}
              placeholder={"Select Recurring"}
              valueField={"strategicName"}
            />
            <Text style={styles.bottomName}>RECURRING</Text>
          </View>
        ) : (
          <View></View>
        )}

        <View>
          <RegistrationDropdown
            data={priorityData}
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
            data={categoryData}
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

      <TouchableOpacity onPress={onPressAdd} style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}> {"Add"}</Text>
      </TouchableOpacity>
      <SafeAreaView />

      <DateTimePickerModal
        isVisible={picker}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setPicker(false)}
      />
    </View>
  );
}
