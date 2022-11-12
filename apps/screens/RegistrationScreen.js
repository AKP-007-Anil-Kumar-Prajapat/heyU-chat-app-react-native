/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SIZES, FONTS} from '../constants';
import {TextInput} from 'react-native-gesture-handler';

const RegistrationScreen = props => {
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
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <View style={styles.headertext}>
          <Text
            style={{
              fontSize: 50,
              color: COLORS.white,
              fontWeight: 'bold',
              marginBottom: 15,
            }}>
            HeyU
          </Text>

          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.white,
              marginBottom: 20,
              fontWeight: 'bold',
            }}>
            Register Your HeyU Account
          </Text>
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your First Name"
            placeholderTextColor="#FFFFFF"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Last Name"
            placeholderTextColor="#FFFFFF"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your g-mail id"
            placeholderTextColor="#FFFFFF"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Password"
            placeholderTextColor="#FFFFFF"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={{color: COLORS.richCarmine, fontSize: 16}}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={{fontSize: 18, color: COLORS.white, marginTop: 20}}>
            Already have an account ? Login Here
          </Text>
        </TouchableOpacity>
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
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '87%',
    height: 50,
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
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: COLORS.white,
  },
});
