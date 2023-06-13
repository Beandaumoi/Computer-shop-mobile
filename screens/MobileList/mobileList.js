import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList
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
      url: 'https://cdn.viettelstore.vn/Images/Product/ProductImage/1896224739.jpeg',
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
      price: 382.50,
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

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View>
        
        {/* <ScrollView>
         {mobiles.map(eachMobile => <MobileItem mobile = {eachMobile} key = {eachMobile.name}/>)}
        </ScrollView> */}
        {/*FlatList*/}
        <FlatList
        data= {mobiles}
        renderItem= {({item}) => <MobileItem 
        onPress = {() => {
          alert('you pressed')
        }} 
        mobile = {item}/>}
        keyExtractor={eachMobile => eachMobile.name} />
      </View>
    </View>
  );
};

export default MobileList;
