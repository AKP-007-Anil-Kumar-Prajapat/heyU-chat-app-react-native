/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SIZES, FONTS} from '../constants';
import {TextInput} from 'react-native-gesture-handler';

const RegistrationScreen = () => {
  // const [] = useState();
  // const [] = useState();
  // const [] = useState();
  // const [] = useState();
  const renderHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.headertext}>
          <Text
            style={{
              ...FONTS.body1,
              color: COLORS.white,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            HeyU
          </Text>

          <Text style={{...FONTS.body4, color: COLORS.white, marginBottom: 5}}>
            Free Chat app template
          </Text>
        </View>

        <View styles={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Name"
            placeholderTextColor={'white'}
          />
        </View>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={[COLORS.richCarmine, COLORS.deepCarminePink]}
      style={styles.linearGradient}>
      {renderHeader()}
    </LinearGradient>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  headertext: {
    flex: 0.2,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 10,
  },
  inputView: {
    // backgroundColor: '#FFC0CB',
    // borderRadius: 30,
    // width: '80%',
    // height: 45,
    // marginBottom: 15,
    // alignItems: 'center',
    width: '80%',
    height: 40,
    borderRadius: 25,
    backgroundColor: '#900000',
    marginHorizontal: 30,
    marginTop: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});
