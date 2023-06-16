import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {images, colors, icons} from '../../constants';
// _ ám chỉ chỉ sử dụng thuộc tính trong nó
const _getColorFromStatus = status => {
  //trim để bỏ khoảng cách đầu hoặc cuối nếu có
  /*
    if(status.toLowerCase().trim() == 'stocking') {
        return colors.success
    } else if(status.toLowerCase().trim() == 'coming soon'){
        return colors.warning
    } else {
        return colors.error
    }
    */
  return status.toLowerCase().trim() == 'stocking'
    ? colors.success
    : status.toLowerCase().trim() == 'coming soon'
    ? colors.warning
    : status.toLowerCase().trim() == 'out of stock'
    ? colors.error
    : colors.success;
};
const MobileItem = props => {
  let {name, url, status, price, type, website, socialNetworks} = props.mobile;
  let {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 150,
        paddingTop: 20,
        flexDirection: 'row',
      }}>
      <Image
        style={{
          height: 100,
          width: 100,
          resizeMode: 'cover',
          borderRadius: 10,
        }}
        source={{
          uri: url,
        }}
      />

      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
        }}>
        <Text
          style={{
            color: colors.black,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>

        <View
          style={{
            height: 1,
            backgroundColor: colors.black,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: 14,
            }}>
            Status:
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: _getColorFromStatus(status),
              fontWeight: '600',
            }}>
            {status.toUpperCase()}
          </Text>
        </View>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.5)',
            fontSize: 14,
          }}>
          Price: {price}$
        </Text>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.5)',
            fontSize: 14,
          }}>
          Type: {type.toUpperCase()}
        </Text>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.5)',
            fontSize: 14,
          }}>
          Web: {website}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
          }}>
          {socialNetworks['facebook'] != undefined && (
            <Image
              source={icons.facebook}
              style={{
                height: 16,
                width: 16,
              }}
            />
          )}
          {socialNetworks['instagram'] != undefined && (
            <Image
              source={icons.instagram}
              style={{
                height: 16,
                width: 16,
                marginHorizontal: 3,
              }}
            />
          )}
          {socialNetworks['youtube'] != undefined && (
            <Image
              source={icons.youtube}
              style={{
                height: 16,
                width: 16,
              }}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MobileItem;
