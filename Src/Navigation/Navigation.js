import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../Screens/DashboardScreen';
import Colors from '../Themes/Colors';
import CategoryScreen from '../Screens/CategoryScreen';
import NewTaskScreen from '../Screens/NewTaskScreen';
import PriorityLevelScreen from '../Screens/PriorityLevelScreen';
import TaskGroupScreen from '../Screens/TaskGroupScreen';
import AllTaskScreen from '../Screens/AllTaskScreen';
import DateDueScreen from '../Screens/DateDueScreen';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Stack = createNativeStackNavigator();

let data = {
  headerBackVisible: false,
  headerTitleAlign: 'center',
};

const HeaderLeft = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DashboardScreen')}
      style={{
        paddingRight: hp(2),
      }}>
      <Image style={styles.homeIcon} source={require('../Images/home.png')} />
    </TouchableOpacity>
  );
};
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({navigation}) => ({
            title: 'Home',
          })}
          name="DashboardScreen"
          component={DashboardScreen}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: 'Date Due',
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="DateDueScreen"
          component={DateDueScreen}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: 'Category',
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="CategoryScreen"
          component={CategoryScreen}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: 'New Task',
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="NewTaskScreen"
          component={NewTaskScreen}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: 'Priority',
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="PriorityLevelScreen"
          component={PriorityLevelScreen}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: 'Task Group',
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="TaskGroupScreen"
          component={TaskGroupScreen}
        />
        <Stack.Screen
          options={({navigation}) => ({
            title: 'All Task',
            ...data,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
          name="AllTaskScreen"
          component={AllTaskScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeIcon: {height: 35, width: 35, resizeMode: 'contain'},
});
