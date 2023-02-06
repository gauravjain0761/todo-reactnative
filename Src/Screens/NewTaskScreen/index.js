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
  const { goBack } = useNavigation();
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

  console.log("duedate", duedate);

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
    } else if (duedate == "") {
      Alert.alert("Please enter the due date");
    } else if (isEmpty(priority)) {
      Alert.alert("Please enter the priority");
    } else if (isEmpty(category)) {
      Alert.alert("Please enter the category");
    } else if (isEmpty(taskGroup)) {
      Alert.alert("Please enter the task group");
    } else {
      firestore()
        .collection("Users")
        .add({
          taskName: taskName,
          dueDate: duedate,
          priorityLevel: priority,
          category: category,
          taskGroup: taskGroup,
        })
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
