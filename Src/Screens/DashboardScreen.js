import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import ApplicationStyles from '../Themes/ApplicationStyles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../Themes/Colors';
import {commonFontStyles} from '../Themes/Fonts';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function DashboardScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    dispatch({type: 'PRE_LOADER', payload: {preLoader: true}});
  }, []);

  return (
    <View style={ApplicationStyles.applicationView}>
      <View style={styles.newTaskButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewTaskScreen')}
          style={styles.circleButton}>
          <Text style={styles.newTaskButtonText}>NEW{'\n'}TASK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.viewText}>VIEW BY</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('DateDueScreen')}
          style={styles.buttonRow}>
          <View>
            <LinearGradient
              colors={['#192f6a', '#4c669f']}
              style={styles.linearGradient}></LinearGradient>
          </View>
          <View>
            <Text style={styles.rowText}>DATE DUE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PriorityLevelScreen')}
          style={styles.buttonRow}>
          <View>
            <LinearGradient
              colors={['#192f6a', '#4c669f']}
              style={styles.linearGradient}></LinearGradient>
          </View>
          <View>
            <Text style={styles.rowText}>PRIORITY LEVEL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CategoryScreen')}
          style={styles.buttonRow}>
          <View>
            <LinearGradient
              colors={['#192f6a', '#4c669f']}
              style={styles.linearGradient}></LinearGradient>
          </View>
          <View>
            <Text style={styles.rowText}>CATEGORY</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TaskGroupScreen')}
          style={styles.buttonRow}>
          <View>
            <LinearGradient
              colors={['#192f6a', '#4c669f']}
              style={styles.linearGradient}></LinearGradient>
          </View>
          <View>
            <Text style={styles.rowText}>TASK GROUP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AllTaskScreen')}
          style={styles.buttonRow}>
          <View>
            <LinearGradient
              colors={['#192f6a', '#4c6690', '#4c6690']}
              style={styles.linearGradient}></LinearGradient>
          </View>
          <View>
            <Text style={styles.rowText}>ALL TASKS</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newTaskButton: {
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: Colors.placeholderColor,
  },
  circleButton: {
    backgroundColor: Colors.black,
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  newTaskButtonText: {
    ...commonFontStyles('500', 16, Colors.lightGreen),
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },
  bottomView: {
    padding: hp(2),
  },
  viewText: {
    ...commonFontStyles('bold', 18, Colors.black),
    marginBottom: hp(2),
  },
  linearGradient: {
    // flex: 1,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: hp(1.5),
  },
  rowText: {
    ...commonFontStyles('400', 18, Colors.black),
  },
});
