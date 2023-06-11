import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
//component = function
// Create a variable which reference to a function
//read objects, variable, functions from other modules
import {images, icons} from '../constants';
const WelcomeScreen = props => {
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
            backgroundColor: 'blue',
          }}>
          <TouchableOpacity
            style={{
              borderColor: 'white',
              borderWidth: 2,
              height: 45,
              borderRadius: 5,
              //margin trái phải
              marginHorizontal: 15,
              //margin trên dưới
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1.5
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}>
              Influencer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderColor: 'white',
              borderWidth: 2,
              height: 45,
              borderRadius: 5,
              //margin trái phải
              marginHorizontal: 15,
              //margin trên dưới
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1.5

            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}>
              Bussiness
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderColor: 'white',
              borderWidth: 2,
              height: 45,
              borderRadius: 5,
              //margin trái phải
              marginHorizontal: 15,
              //margin trên dưới
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1.5

            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}>
              Individual
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 20,
            backgroundColor: 'purple',
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
