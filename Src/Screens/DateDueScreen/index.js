import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import { styles } from "./styles";
import Footer from "../../Components/Footer";
import { dummyData, timeStampToDate } from "../../Config/Constatnts";
import firestore from "@react-native-firebase/firestore";
import moment from "moment";

export default function DateDueScreen() {
  const [data, setData] = useState([]);
  const [parPage, setParPage] = useState(10);

  useEffect(() => {
    getData();
    // onLoadData(parPage);
  }, []);

  const userCollection = firestore().collection("Users");
  const [lastDocument, setLastDocument] = useState();
  const [startAfter, setStartAfter] = useState({});

  const getData = async () => {
    const users = await firestore()
      .collection("Users")
      .orderBy("taskName")
      .get();
    let sortingData = users.docs.filter(
      (i) =>
        moment(timeStampToDate(i?._data?.dueDate?.seconds)).format(
          "DD-MM-YYYY"
        ) !== moment().format("DD-MM-YYYY")
    );
    setData(sortingData);
  };

  async function onLoadData(count) {
    let newData = [];
    const querySnapShort = await firestore()
      .collection("Users")
      .orderBy("taskName")
      .limit(count)
      .get();
    const lastVisible = querySnapShort.docs[querySnapShort.docs.length - 1];
    setStartAfter(lastVisible);
    querySnapShort.forEach((doc) => {
      let postData = doc.data();
      postData.postId = doc.id;
      newData.push(postData);
      console.log("newData", newData);
      setData(newData);
    });
  }

  const onPressLeft = () => {
    onLoadData(parPage - 5);
  };

  const onPressRight = async () => {
    let newData = [];
    const querySnapShort = await firestore()
      .collection("Users")
      .orderBy("taskName")
      .startAfter(startAfter)
      .limit(parPage)
      .get();
    const lastVisible = querySnapShort.docs[querySnapShort.docs.length - 1];
    setStartAfter(lastVisible);
    querySnapShort.forEach((doc) => {
      let postData = doc.data();
      postData.postId = doc.id;
      newData.push(postData);
      console.log("newData", newData);
      setData(newData);
    });
  };

  return (
    <View style={ApplicationStyles.applicationView}>
      <View style={styles.mainView}>
        <View style={styles.row}>
          <View style={styles.leftView}>
            <Text style={styles.title}>TASK</Text>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.title}>DATE</Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            let data = item._data;
            return (
              <View key={index} style={styles.row}>
                <View style={styles.leftView}>
                  <Text style={styles.taskText}>{data?.taskName}</Text>
                </View>
                <View style={styles.rightView}>
                  <Text style={styles.dateText}>
                    {moment(timeStampToDate(data?.dueDate?.seconds)).format(
                      "DD-MM-YYYY"
                    )}
                  </Text>
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Footer onPressLeft={onPressLeft} onPressRight={onPressRight} />
    </View>
  );
}
