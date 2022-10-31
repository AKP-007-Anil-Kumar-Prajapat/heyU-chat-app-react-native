/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {icons, images, SIZES, COLORS, FONTS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('anilkumarprajapat.ak@gmail.com');
  const [password, setPassword] = useState('admin@123');

  function renderHeader() {
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
              ...FONTS.body1,
              color: COLORS.white,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            HeyU
          </Text>

          <Text style={{...FONTS.body4, color: COLORS.white, marginBottom: 5}}>
            Free chat app template
          </Text>
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            placeholderTextColor="#003f5c"
            onChangeText={() => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={() => setPassword(password)}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('RegisterScren')}>
          <Text style={{color: COLORS.richCarmine, fontSize: 16}}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{color: COLORS.white, marginTop: 20}}>
            Already have an account ? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    // <SafeAreaView styel={styles.container}>
    //   <LinearGradient
    //     colors={[COLORS.richCarmine, COLORS.deepCarminePink]}
    //     style={styles.linearGradient}></LinearGradient>
    // </SafeAreaView>
    <LinearGradient
      colors={[COLORS.richCarmine, COLORS.deepCarminePink]}
      style={styles.linearGradient}>
      {renderHeader()}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.deepCarminePink,
  },

  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  image: {
    marginBottom: 40,
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

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: COLORS.white,
  },

  headertext: {
    flex: 0.2,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 10,
  },
});

export default LoginScreen;
