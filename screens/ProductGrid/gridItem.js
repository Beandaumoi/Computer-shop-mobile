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
import FiveStarts from './fiveStars';
function GridItem(props) {
  const {item, index, onPress} = props;
  return (
    <View
      style={{
        flex: 0.5,
        //height: 200,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginBottom: 5,
        marginTop: 5,
        marginRight: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
      }}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            resizeMode: 'contain',
            marginRight: 6,
          }}
          source={{uri: item.url}}
        />

        <Text
          style={{
            fontSize: 22,
            marginTop: 10,
            color: colors.black,
          }}>
          ${item.price}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 16,
          color: colors.primary,
          margin: 10,
          fontWeight: 'bold',
        }}>
        {item.name}
      </Text>

      {item.specifications.map(specification => (
        <Text
          key={specification}
          style={{
            fontSize: 12,
            paddingHorizontal: 5,
            paddingBottom: 10,
          }}>
          * {specification}
        </Text>
      ))}

      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flexDirection: 'row',
          }}>
          {item.isSaved == undefined || item.isSaved == false ? (
            <Image
              style={{
                width: 25,
                height: 25,
                margin: 10,
                tintColor: colors.inactive,
              }}
              source={icons.heart}
            />
          ) : (
            <Image
              style={{
                width: 25,
                height: 25,
                margin: 10,
                tintColor: 'red',
              }}
              source={icons.heartActive}
            />
          )}
          <Text
            style={{
              fontSize: 12,
              color:
                item.isSaved == undefined || item.isSaved == false
                  ? colors.inactive
                  : 'red',
              alignSelf: 'center',
              width: 60,
            }}>
            Saved for later
          </Text>
        </TouchableOpacity>
        <View>
          <FiveStarts key={item.name} numberOfStars={item.stars} />
          <Text
            style={{
              color: colors.primary,
              fontSize: 10,
              textAlign: 'right',
              paddingTop: 5,
            }}>
            {item.reviews} reviews
          </Text>
        </View>
      </View>
    </View>
  );
}
export default GridItem;
