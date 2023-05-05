import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
  ScrollView,
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
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const citydata = [
  { id: 1, strategicName: "SUPERTREND" },
  { id: 2, strategicName: "VWAP" },
  { id: 3, strategicName: "RSIMA" },
  { id: 4, strategicName: "TESTING" },
  { id: 5, strategicName: "DEMATADE" },
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
  const [taskGroupData, setTaskGroupData] = useState([]);
  const [taskGroupEditModal, setTaskGroupEditModal] = useState(false);
  const [taskGroup, setTaskGroup] = useState("");
  const [taskGroupName, setTaskGroupName] = useState("");
  const [picker, setPicker] = useState(false);
  const handleConfirm = (date) => {
    setDuedate(date);
    setPicker(false);
  };

  const userCollection = firestore().collection("Users");
  const [lastDocument, setLastDocument] = useState();
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("taskGroupData");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      return null;
    }
  };

  useEffect(async () => {
    let data = await getData();
    console.log(data);
    setTaskGroupData(data);
  }, []);

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

  const toggleEditModal = () => {
    setTaskGroupEditModal(!taskGroupEditModal);
  };

  const onPressAddTaskGroup = async () => {
    if (taskGroupName.trim() !== "") {
      let data = Object.assign([], taskGroupData);
      if (data.length == 0) {
        data.push({
          id: 1,
          strategicName: taskGroupName,
        });
      } else {
        data.push({
          id: data[data.length - 1].id + 1,
          strategicName: taskGroupName,
        });
      }
      setTaskGroupData(data);
      setTaskGroupName("");
      await AsyncStorage.setItem("taskGroupData", JSON.stringify(data));
      console.log("--data--", data);
    } else {
      Alert.alert("Please enter the task group name");
    }
  };

  const onPressDelete = async (index) => {
    let data = Object.assign([], taskGroupData);
    data.splice(index, 1);
    setTaskGroupData(data);
    await AsyncStorage.setItem("taskGroupData", JSON.stringify(data));
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
            data={taskGroupData}
            value={taskGroup}
            setData={(text) => {
              setTaskGroup(text);
            }}
            placeholder={"Select Task Group"}
            valueField={"strategicName"}
          />
          <Text style={styles.bottomName}>TASK GROUP</Text>
        </View>
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={() => toggleEditModal()}
        >
          <Text style={styles.buttonTextStyle2}>{"Add/Delete Task Group"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onPressAdd} style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}> {"Add"}</Text>
      </TouchableOpacity>
      <SafeAreaView />
      <Modal isVisible={taskGroupEditModal}>
        <View style={styles.modalView}>
          <Text style={styles.buttonTextStyle2}>Add/Delete Task Group</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder={"Enter Task Group"}
              placeholderTextColor={Colors.placeholderColor}
              style={[styles.textInput, { flex: 1 }]}
              value={taskGroupName}
              onChangeText={(text) => setTaskGroupName(text)}
            />
            <TouchableOpacity onPress={() => onPressAddTaskGroup()}>
              <Text style={styles.addButton}>Add</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {taskGroupData.length !== 0 &&
              taskGroupData.map((item, index) => {
                return (
                  <View
                    style={[
                      styles.inputView,
                      { justifyContent: "space-between", marginVertical: 0 },
                    ]}
                  >
                    <Text>{item.strategicName}</Text>
                    <TouchableOpacity onPress={() => onPressDelete(index)}>
                      <Image
                        style={styles.icons}
                        source={require("../../Images/trash.png")}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
          </ScrollView>
          <TouchableOpacity
            onPress={() => toggleEditModal()}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTextStyle}> {"Save"}</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <DateTimePickerModal
        isVisible={picker}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setPicker(false)}
      />
    </View>
  );
}
