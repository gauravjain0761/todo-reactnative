import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../Screens/DashboardScreen";
import Colors from "../Themes/Colors";
import CategoryScreen from "../Screens/CategoryScreen";
import NewTaskScreen from "../Screens/NewTaskScreen";
import PriorityLevelScreen from "../Screens/PriorityLevelScreen";
import TaskGroupScreen from "../Screens/TaskGroupScreen";
import AllTaskScreen from "../Screens/AllTaskScreen";
import DateDueScreen from "../Screens/DateDueScreen";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import CompletedScreen from "../Screens/CompletedScreen.js";
import { commonFontStyles } from "../Themes/Fonts";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import AboutUsScreen from "../Screens/AboutUsScreen";
import TermsScreen from "../Screens/TermsScreen/index";
import PrivacyScreen from "../Screens/PrivacyScreen";
import AllTaskGroupListScreen from "../Screens/AllTaskGroupListScreen";
import ArchivedScreen from "../Screens/ArchivedScreen";

const Stack = createNativeStackNavigator();

let data = {
  headerBackVisible: false,
  headerTitleAlign: "center",
  headerTitleStyle: { ...commonFontStyles("500", 22, Colors.blue) },
};

const HeaderLeft = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DashboardScreen")}
      style={{
        paddingRight: hp(2),
      }}
    >
      <Image style={styles.homeIcon} source={require("../Images/home.png")} />
    </TouchableOpacity>
  );
};

const Drawer = createDrawerNavigator();
export function DashboardDrawer({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerPosition: "right",
      })}
    >
      <Drawer.Screen
        options={({ navigation }) => ({
          headerTitle: "",
          headerLeft: "",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{
                paddingHorizontal: hp(2),
              }}
            >
              <Image
                style={styles.homeIcon}
                source={require("../Images/menu.png")}
              />
            </TouchableOpacity>
          ),
          title: "DASHBOARD",
        })}
        name={"DashboardScreen"}
        component={DashboardScreen}
      />
      <Drawer.Screen
        options={({ navigation }) => ({
          headerTitle: "ABOUT US",
          ...data,
          headerLeft: () => (
            <View style={{ paddingLeft: hp(2) }}>
              <HeaderLeft navigation={navigation} />
            </View>
          ),
          title: "ABOUT US",
        })}
        name={"AboutUsScreen"}
        component={AboutUsScreen}
      />
      <Drawer.Screen
        options={({ navigation }) => ({
          headerTitle: "PRIVACY POLICY",
          ...data,
          headerLeft: () => (
            <View style={{ paddingLeft: hp(2) }}>
              <HeaderLeft navigation={navigation} />
            </View>
          ),
          title: "PRIVACY POLICY",
        })}
        name={"PrivacyScreen"}
        component={PrivacyScreen}
      />
      <Drawer.Screen
        options={({ navigation }) => ({
          headerTitle: "TERMS & CONDITION",
          ...data,
          headerLeft: () => (
            <View style={{ paddingLeft: hp(2) }}>
              <HeaderLeft navigation={navigation} />
            </View>
          ),
          title: "TERMS & CONDITION",
        })}
        name={"TermsScreen"}
        component={TermsScreen}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({ navigation }) => ({
            title: "",
            headerShown: false,
          })}
          name="DashboardDrawer"
          component={DashboardDrawer}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "CHRONOLOGICAL",

            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="DateDueScreen"
          component={DateDueScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "CATEGORY",
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="CategoryScreen"
          component={CategoryScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "",
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="NewTaskScreen"
          component={NewTaskScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "PRIORITY LEVEL",
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="PriorityLevelScreen"
          component={PriorityLevelScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "TASK GROUPS",
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="TaskGroupScreen"
          component={TaskGroupScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "ALL TASKS",
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="AllTaskScreen"
          component={AllTaskScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "ARCHIVED",
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="ArchivedScreen"
          component={ArchivedScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "ALL TASKS",
            ...data,
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{
                    paddingRight: hp(2),
                  }}
                >
                  <Image
                    style={styles.homeIcon}
                    source={require("../Images/home.png")}
                  />
                </TouchableOpacity>
              );
            },
          })}
          name="AllTaskGroupListScreen"
          component={AllTaskGroupListScreen}
        />

        <Stack.Screen
          options={({ navigation }) => ({
            title: "COMPLETED TASK",
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="CompletedScreen"
          component={CompletedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeIcon: {
    height: 35,
    width: 35,
    resizeMode: "contain",
  },
});
