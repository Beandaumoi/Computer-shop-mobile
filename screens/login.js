import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {images, colors, icons} from '../constants';
import {isValidGmail, isValidPassword} from '../validations/validations';
function Login(props) {
  //states for validating
  const [errorGmail, setErrorGmail] = useState(' ');
  const [errorPassword, setErrorPassword] = useState(' ');
  //state to store Gmail/password to test this is correct password/
  //Gmail and give the error or nothing
  const [gmail, setGmail] = useState('manh@gmail.com');
  const [password, setPassword] = useState('123456');
  //Check isValid or Not isValid
  const isValidOk = () =>
    gmail.length > 0 &&
    password.length > 0 &&
    isValidGmail(gmail) == true &&
    isValidPassword(password) == true;

  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: 200,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            width: '50%',
            marginLeft: 10,
            color: colors.primary,
          }}>
          Already have an account?
        </Text>
        <Image
          source={images.logo}
          style={{
            width: 150,
            height: 150,
            marginRight: 10,
          }}
        />
      </View>

      <View
        style={{
          marginLeft: 30,
        }}>
        <Text
          style={{
            color: colors.primary,
            fontSize: 14,
            marginVertical: 10,
          }}>
          Gmail
        </Text>
        <TextInput
          onChangeText={text => {
            setErrorGmail(
              isValidGmail(text) == true ? ' ' : 'Gmail not correct format',
            );
            setGmail(text);
          }}
          placeholder="Examples@gmail.com"
          placeholderTextColor={colors.placeholder}
          autoCapitalize="none"
          value={gmail}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            marginRight: 30,
            paddingBottom: 5,
          }}
        />
        <Text
          style={{
            color: 'red',
            fontSize: 12,
          }}>
          {errorGmail}
        </Text>
      </View>

      <View
        style={{
          marginLeft: 30,
        }}>
        <Text
          style={{
            color: colors.primary,
            fontSize: 14,
            marginVertical: 10,
          }}>
          Password
        </Text>
        <TextInput
          onChangeText={text => {
            setErrorPassword(
              isValidPassword(text) == true
                ? ' '
                : ' Password must be at least 5 characters',
            );
            setPassword(text);
          }}
          secureTextEntry={true}
          placeholder="Enter Password....."
          placeholderTextColor={colors.placeholder}
          value={password}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            marginRight: 30,
            paddingBottom: 5,
          }}
        />
        <Text
          style={{
            color: 'red',
            fontSize: 12,
          }}>
          {errorPassword}
        </Text>
      </View>

      <TouchableOpacity
        disabled={isValidOk() == false}
        onPress={() => {
          navigate('UITab');
        }}
        style={{
          backgroundColor:
            isValidOk() == true ? colors.primary : colors.inactive,
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          borderRadius: 50,
          alignSelf: 'center',
          marginTop: 50,
        }}>
        <Text
          style={{
            padding: 10,
            fontSize: 14,
            color: 'white',
          }}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigate('Register');
        }}
        style={{
          width: '50%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: colors.primary,
            fontSize: 14,
            marginTop: 10,
            padding: 10,
          }}>
          New user? Register now
        </Text>
      </TouchableOpacity>

      <View
        style={{
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <View style={{height: 1, backgroundColor: 'black', flex: 1}}></View>
        <Text
          style={{
            color: colors.primary,
            fontSize: 14,
            marginTop: 10,
            padding: 10,
            marginTop: 0,
            marginHorizontal: 5,
          }}>
          Use other methods?
        </Text>
        <View style={{height: 1, backgroundColor: 'black', flex: 1}}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Image
          source={icons.facebook}
          style={{
            height: 40,
            width: 40,
          }}
        />
        <View style={{width: 30}} />
        <Image
          source={icons.instagram}
          style={{
            height: 40,
            width: 40,
          }}
        />
      </View>
    </View>
  );
}

export default Login;
