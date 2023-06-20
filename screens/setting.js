import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Switch,
} from 'react-native';
import {images, colors, icons} from '../constants';
import {UIHeader} from '../components';
function Setting(props) {
  const [isEnabledLockApp, setEnabledLockApp] = useState(true);
  const [isUseFingerPrint, setUseFingerPrint] = useState(false);
  const [isEnabledPassword, setEnabledPassword] = useState(true);

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <UIHeader title={'Settings'} />
      <ScrollView>
        <View>
          {/* Common Settings */}
          <View
            style={{
              height: 40,
              backgroundColor: 'rgb(242,241, 245)',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: 600,
                marginLeft: 15,
              }}>
              Common
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
              }}
              source={icons.global}
            />
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Language
            </Text>
            <View style={{flex: 1}} />
            <Text
              style={{
                fontSize: 16,
                color: colors.inactive,
                alignSelf: 'center',
              }}>
              VietNam
            </Text>
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: colors.inactive,
              }}
              source={icons.rightArrow}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
              }}
              source={icons.cloud}
            />
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Environment
            </Text>
            <View style={{flex: 1}} />
            <Text
              style={{
                fontSize: 16,
                color: colors.inactive,
                alignSelf: 'center',
              }}>
              Production
            </Text>
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: colors.inactive,
              }}
              source={icons.rightArrow}
            />
          </View>
          {/* Account Settings */}
          <View
            style={{
              height: 40,
              backgroundColor: 'rgb(242,241, 245)',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: 600,
                marginLeft: 15,
              }}>
              Account
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
              }}
              source={icons.phoneNumber}
            />
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Phone number
            </Text>
            <View style={{flex: 1}} />
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: colors.inactive,
              }}
              source={icons.rightArrow}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
              }}
              source={icons.email}
            />
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Email
            </Text>
            <View style={{flex: 1}} />
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: colors.inactive,
              }}
              source={icons.rightArrow}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
              }}
              source={icons.signOut}
            />
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Sign out
            </Text>
            <View style={{flex: 1}} />
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: colors.inactive,
              }}
              source={icons.rightArrow}
            />
          </View>
          {/* Security Settings */}
          <View
            style={{
              height: 40,
              backgroundColor: 'rgb(242,241, 245)',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: 600,
                marginLeft: 15,
              }}>
              Security
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
              }}
              source={icons.lockApp}
            />
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Lock app in background
            </Text>
            <View style={{flex: 1}} />
            <Switch
              trackColor={{false: colors.inactive, true: colors.primary}}
              thumbColor={isEnabledLockApp ? colors.white : colors.white}
              onValueChange={() => {
                setEnabledLockApp(!isEnabledLockApp);
              }}
              value={isEnabledLockApp}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
              }}
              source={icons.fingerPrint}
            />
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Use fingerprint
            </Text>
            <View style={{flex: 1}} />
            <Switch
              trackColor={{false: colors.inactive, true: colors.primary}}
              thumbColor={isUseFingerPrint ? colors.white : colors.white}
              onValueChange={() => {
                setUseFingerPrint(!isUseFingerPrint);
              }}
              value={isUseFingerPrint}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
              }}
              source={icons.lock}
            />
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Change password
            </Text>
            <View style={{flex: 1}} />
            <Switch
              trackColor={{false: colors.inactive, true: colors.primary}}
              thumbColor={isEnabledPassword ? colors.white : colors.white}
              onValueChange={() => {
                setEnabledPassword(!isEnabledPassword);
              }}
              value={isEnabledPassword}
            />
          </View>

          {/* Misc settings */}
          <View
            style={{
              height: 40,
              backgroundColor: 'rgb(242,241, 245)',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: 600,
                marginLeft: 15,
              }}>
              Misc
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
              }}
              source={icons.docs}
            />
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Terms of Service
            </Text>
            <View style={{flex: 1}} />
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: colors.inactive,
              }}
              source={icons.rightArrow}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
              }}
              source={icons.openSource}
            />
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Open source licenses
            </Text>
            <View style={{flex: 1}} />
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: colors.inactive,
              }}
              source={icons.rightArrow}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default Setting;
