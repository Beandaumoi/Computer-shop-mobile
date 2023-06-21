import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {images, colors, icons} from '../../constants';
import {isValidGmail, isValidPassword} from '../../validations/validations';
import MobileItem from './mobileItem';
/*
- ListView from map of objects
- FlatList
*/
const MobileList = props => {
  //list of mobiles = state
  const [mobiles, setMobiles] = useState([
    {
      name: 'Iphone 13 Pro Max',
      url: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-600x600.jpg',
      status: 'Out of stock',
      price: 1054.94,
      type: 'IOS',
      website: 'https://cellphones.com.vn/iphone-13-pro-max.html',
      socialNetworks: {
        facebook: 'https://www.facebook.com/profile.php?id=100014693316787',
        instagram: 'https://instagram.com/daoduc.m?igshid=OGQ5ZDc2ODk2ZA==',
        youtube: 'https://www.youtube.com/channel/UCo5zwTpNd8Kbbab5OGuuv0g',
      },
    },
    {
      name: 'SamSung Galaxy S23 Ultra',
      url: 'https://images.samsung.com/is/image/samsung/p6pim/vn/2302/gallery/vn-galaxy-s23-s918-446906-sm-s918bzabxxv-thumb-534877085?imwidth=480',
      status: 'Stocking',
      price: 1148.56,
      type: 'Android',
      website: 'https://cellphones.com.vn/samsung-galaxy-s23-ultra.html',
      socialNetworks: {
        facebook: 'https://www.facebook.com/profile.php?id=100014693316787',
        instagram: 'https://instagram.com/daoduc.m?igshid=OGQ5ZDc2ODk2ZA==',
      },
    },
    {
      name: 'Iphone 14 Pro Max',
      url: 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-den-thumb-600x600.jpg',
      status: 'Out of stock',
      price: 1135.79,
      type: 'IOS',
      website: 'https://cellphones.com.vn/iphone-14-pro-max.html?itm=search',
      socialNetworks: {
        facebook: 'https://www.facebook.com/profile.php?id=100014693316787',
        youtube: 'https://www.youtube.com/channel/UCo5zwTpNd8Kbbab5OGuuv0g',
      },
    },
    {
      name: 'Huawei P50 Pro',
      url: 'https://cdn.tgdd.vn/Products/Images/42/226196/huawei-p50-pro-600x600.jpg',
      status: 'Coming soon',
      price: 1276.61,
      type: 'Harmony OS',
      website: 'https://cellphones.com.vn/huawei-p50-pro.html',
      socialNetworks: {
        youtube: 'https://www.youtube.com/channel/UCo5zwTpNd8Kbbab5OGuuv0g',
      },
    },
    {
      name: 'Oppo Find N2 Flip',
      url: 'https://m.media-amazon.com/images/I/81ww2RdmvzL.jpg',
      status: 'Stocking',
      price: 850.67,
      type: 'Android',
      website: 'https://cellphones.com.vn/oppo-find-n2-flip.html',
      socialNetworks: {
        facebook: 'https://www.facebook.com/profile.php?id=100014693316787',
        instagram: 'https://instagram.com/daoduc.m?igshid=OGQ5ZDc2ODk2ZA==',
      },
    },
    {
      name: 'Redmi Note 12 Pro 5G',
      url: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gtt7766.jpg',
      status: 'Stocking',
      price: 382.5,
      type: 'MIUI',
      website: 'https://cellphones.com.vn/xiaomi-redmi-note-12-pro-5g.html',
      socialNetworks: {
        facebook: 'https://www.facebook.com/profile.php?id=100014693316787',
        instagram: 'https://instagram.com/daoduc.m?igshid=OGQ5ZDc2ODk2ZA==',
        youtube: 'https://www.youtube.com/channel/UCo5zwTpNd8Kbbab5OGuuv0g',
      },
    },
    {
      name: 'iPad Pro 12.9 inch 2022 M2',
      url: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ipad-pro-13-select-wifi-spacegray-202210-02_3_4_1_1.jpg',
      status: 'Coming soon',
      price: 1212.19,
      type: 'Ios',
      website: 'https://cellphones.com.vn/ipad-pro-2022-12-9-inch-m2-2tb.html',
      socialNetworks: {
        facebook: 'https://www.facebook.com/profile.php?id=100014693316787',
        instagram: 'https://instagram.com/daoduc.m?igshid=OGQ5ZDc2ODk2ZA==',
      },
    },
  ]);

  const [categories, setCategories] = useState([
    {
      name: 'Điện thoại',
      icon: icons.phone,
    },
    {
      name: 'Đồng hồ',
      icon: icons.watch,
    },
    {
      name: 'Laptop',
      icon: icons.laptop,
    },
    {
      name: 'Apple',
      icon: icons.apple,
    },
    {
      name: 'Màn hình',
      icon: icons.screen,
    },
    {
      name: 'Đồ chơi CN',
      icon: icons.gaming,
    },
    {
      name: 'Smart TV',
      icon: icons.tv,
    },
    {
      name: 'Tablet',
      icon: icons.tablet,
    },
    {
      name: 'Âm Thanh',
      icon: icons.sound,
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const filteredMobiles = () =>
    mobiles.filter(eachMobile =>
      eachMobile.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View>
        <View
          style={{
            height: 50,
            marginHorizontal: 10,
            marginTop: 50,
            flexDirection: 'row',
          }}>
          <Image
            source={icons.search}
            style={{
              width: 16,
              height: 16,
              resizeMode: 'contain',
              position: 'absolute',
              top: 8,
              left: 5,
            }}
          />
          <TextInput
            autoCorrect={false}
            onChangeText={text => {
              setSearchText(text);
            }}
            style={{
              backgroundColor: colors.placeholder,
              opacity: 1,
              height: 30,
              flex: 1,
              marginRight: 10,
              borderRadius: 5,
              fontSize: 16,
              paddingLeft: 25,
            }}
          />
          <Image
            source={icons.menu}
            style={{
              height: 30,
              width: 25,
              tintColor: 'rgba(0,0,0,0.8)',
              marginBottom: 3,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            height: 100,
          }}>
          <View style={{height: 1, backgroundColor: colors.black}}></View>
          <FlatList
            horizontal
            keyExtractor={item => item.name}
            data={categories}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    alert('You Pressing icon ');
                  }}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      height: 45,
                      width: 45,
                      resizeMode: 'cover',
                      borderWidth: 2,
                      borderRadius: 25,
                      margin: 10,
                      backgroundColor: colors.primary,
                    }}
                    source={item.icon}
                  />
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: 12,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
            style={{flex: 1}}></FlatList>
          <View style={{height: 1, backgroundColor: colors.black}}></View>
        </View>

        {/* <ScrollView>
         {mobiles.map(eachMobile => <MobileItem mobile = {eachMobile} key = {eachMobile.name}/>)}
        </ScrollView> */}
      </View>
      {filteredMobiles().length > 0 ? (
        <FlatList
          data={filteredMobiles()}
          renderItem={({item}) => (
            <MobileItem
              onPress={() => {
                alert('you pressed');
              }}
              mobile={item}
            />
          )}
          keyExtractor={eachMobile => eachMobile.name}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={images.error}
            style={{
              width: 300,
              height: 300,
              marginTop: '50%',
              alignSelf: 'center',
              resizeMode: 'contain',
              marginBottom: '50%',
            }}
          />
        </View>
      )}
    </View>
  );
};

export default MobileList;
