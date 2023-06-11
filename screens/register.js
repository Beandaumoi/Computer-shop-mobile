import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {images, colors, icons} from '../constants';
import { isValidGmail, isValidPassword } from '../validations/validations';

const Register = (props) => {
    //states for validating
  const [errorGmail, setErrorGmail] = useState(' ');
  const [errorPassword, setErrorPassword] = useState(' ');
  //state to store Gmail/password to test this is correct password/
  //Gmail and give the error or nothing
  const [gmail, setGmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  //Check isValid or Not isValid
  const isValidOk = () => gmail.length > 0 && password.length >0
                        && isValidGmail(gmail) == true &&
                        isValidPassword(password) == true 
  return (
    <View
      style={{
        flex: 100,
        backgroundColor: colors.primary
      }}>
      <View
        style={{
          height: 200,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            width: '50%',
            marginLeft: 10,
            color: colors.white,
          }}>
          Here's your first step with us
        </Text>
        <Image
          source={images.logo}
          style={{
            width: 150,
            height: 150,
            marginRight: 10,
            borderWidth: 1,
            borderColor: colors.white,
            backgroundColor: colors.white,
            borderRadius: 50
          }}
        />
      </View>
          <View style = {{
            borderWidth: 1,
            margin: 10,
            borderColor: colors.white,
            backgroundColor: colors.white,
            borderRadius: 7,
          }}>
          <View
        style={{
          marginLeft: 30,
        }}>
        <Text
          style={{
            color: colors.primary,
            fontSize: 14,
            marginVertical: 10,
            marginTop: 30
          }}>
          Gmail
        </Text>
        <TextInput
          onChangeText={text => {
            setErrorGmail(isValidGmail(text) == true? ' ':'Gmail not correct format');
            setGmail(text);
          }}
          placeholder="Examples@gmail.com"
          placeholderTextColor={colors.placeholder}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            marginRight: 30,
            paddingBottom: 5,
          }}
        />
        <Text style={{
          color: 'red',
          fontSize: 12,
        }}>{errorGmail}</Text>
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
            setErrorPassword(isValidPassword(text) == true ?' ':
            
            ' Password must be at least 5 characters');
            setPassword(text);
          }}
          secureTextEntry={true}
          placeholder="Enter Password....."
          placeholderTextColor={colors.placeholder}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            marginRight: 30,
            paddingBottom: 5,
          }}
        />
        <Text style={{
          color: 'red',
          fontSize: 12,
        }}>{errorPassword}</Text>
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
          Confirm Password
        </Text>
        <TextInput
          onChangeText={text => {
            setErrorPassword(isValidPassword(text) == true ?' ':
            
            ' Password must be at least 5 characters');
            setPassword(text);
          }}
          secureTextEntry={true}
          placeholder="Re-Enter Password....."
          placeholderTextColor={colors.placeholder}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            marginRight: 30,
            paddingBottom: 5,
          }}
        />
        <Text style={{
          color: 'red',
          fontSize: 12,
        }}>{errorPassword}</Text>
      </View>

      <TouchableOpacity
      disabled = {isValidOk() ==  false}
      onPress={() => {
        alert(`email: ${gmail}, password: ${password}`)
      }}
        style={{
          backgroundColor: isValidOk() == true ? 
          colors.primary : colors.inactive,
          justifyContent: 'center',
          alignItems: 'center',
          width: '70%',
          borderRadius: 50,
          alignSelf: 'center',
          marginTop: 10,
          marginBottom:20
        }}>
        <Text
          style={{
            padding: 10,
            fontSize: 14,
            color: colors.white,
          }}>
          Register
        </Text>
      </TouchableOpacity>
          </View>

      <View
        style={{
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <View style={{height: 1, backgroundColor: colors.white, flex: 1}}></View>
        <Text
          style={{
            color: colors.white,
            fontSize: 14,
            marginTop: 10,
            padding: 10,
            marginTop: 0,
            marginHorizontal: 5,
          }}>
          Use other methods?
        </Text>
        <View style={{height: 1, backgroundColor: colors.white, flex: 1}}></View>
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

export default  Register