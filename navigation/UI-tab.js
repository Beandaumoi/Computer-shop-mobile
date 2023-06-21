/**
 * yarn add react-navigation
 * yarn add react-native-safe-area-context ( đối với điệ thoại có tai thỏ
thì cùng safe area sẽ tránh 2 tai thỏ và phần còn lại sẽ là safe area)
 * yarn add @react-navigation/bottom-tabs (để tab nằm ở dưới màn hình)
 * yarn add @react-navigation/native
 * yarn add @react-navigation/native-stack (di chuyển giữa những màn 
hình khác nhau - cần 2 thằng trên)
 */
import * as React from 'react';
import {MobileList, ProductGridView, Setting} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, icons} from '../constants';
import {Image, View} from 'react-native';

const Tab = createBottomTabNavigator();
//route lấy từ navigation giúp tuỳ biến màn hình như bỏ header thay màu
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: colors.white,
  tabBarInactiveTintColor: colors.black,
  tabBarActiveBackgroundColor: colors.primary,
  tabBarInactiveBackgroundColor: colors.primary,
  tabBarBackground: () => (
    <View
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}></View>
  ),
  tabBarIcon: ({focused, color, size}) => {
    /*
        const screenName = route.name
        
        const iconName = screenName == "ProductGridView" ? icons.pc :
        (screenName == "MobileList" ? icons.phone : (
            screenName == "Setting" ? icons.setting : icons.pc
        ))
        */
    return (
      <Image
        tintColor={focused ? colors.white : colors.inactive}
        style={{
          width: 25,
          height: 25,
          resizeMode: 'contain',
        }}
        source={
          route.name == 'ProductGridView'
            ? icons.pc
            : route.name == 'MobileList'
            ? icons.phone
            : route.name == 'Setting'
            ? icons.setting
            : icons.pc
        }
      />
    );
  },
});
function UITab(props) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={'ProductGridView'}
        component={ProductGridView}
        options={{
          tabBarLabel: 'PC-Products',
        }}
      />
      <Tab.Screen
        name={'MobileList'}
        component={MobileList}
        options={{
          tabBarLabel: 'Phone-Products',
        }}
      />
      <Tab.Screen
        name={'Setting'}
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
}
export default UITab;
