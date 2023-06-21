import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
//component = function
// Create a variable which reference to a function
//read objects, variable, functions from other modules
import {images, icons, colors} from '../constants';
import {UIButton} from '../components';
function WelcomeScreen(props) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: false,
    },
    {
      name: 'Business',
      isSelected: false,
    },
    {
      name: 'Individual',
      isSelected: false,
    },
  ]);
  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation
  return (
    <View style={{flex: 100}}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 20,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: -30,
          }}>
          <Image
            source={icons.fire}
            style={{
              width: 40,
              height: 40,
              marginHorizontal: 5,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            YOURCOMPANY.CO
          </Text>
          <View
            style={{
              flex: 100,
            }}
          />
          <Image
            source={icons.question}
            style={{
              width: 25,
              height: 25,
              tintColor: 'white',
              marginRight: 5,
            }}
          />
        </View>
        {/* chia để trị */}
        <View
          style={{
            flex: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginTop: 45,
              marginBottom: 8,
              fontSize: 16,
              color: 'white',
            }}>
            Welcome To
          </Text>
          <Text
            style={{
              marginBottom: 8,
              fontWeight: 'bold',
              color: 'white',
              fontSize: 20,
            }}>
            YOURCOMPANY.CO!
          </Text>
          <Text
            style={{
              marginBottom: 8,
              fontSize: 16,
              color: 'white',
            }}>
            Please Select your account type
          </Text>
        </View>
        <View
          style={{
            flex: 40,
          }}>
          {accountTypes.map(accountType => (
            <UIButton 
            key = {accountType.name}
              onPress={() => {
                setAccountTypes(accountTypes.map(eachAccountType => {
                  return eachAccountType.name === accountType.name?
                  {...eachAccountType, isSelected : true} : {...eachAccountType, isSelected : false}
                }))
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>
        <View
          style={{
            flex: 20,
          }}
        >
          <UIButton
          onPress = {() => {
            navigate('Login')
          }}
           title= {'Login'.toUpperCase()}/>
          <Text style={{
            alignSelf: 'center',
            color: 'white',
            fontSize: 14,
            marginTop: 5
          }}>Want to register new account?</Text>

          <TouchableOpacity 
          onPress={() => alert('Register')}
          style={{
            marginHorizontal: 155,
            marginTop: 5
          }}>
          <Text style={{
            alignSelf: 'center',
            color: colors.primary,
            fontSize: 14,
            textDecorationLine: 'underline',
          }}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
