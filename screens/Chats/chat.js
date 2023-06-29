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
import { UIHeader } from '../../components';
import ChatItem from './chatItem';
function Chat(props) {
  const [users, setUsers] = useState([
    {
      url: 'https://static2.yan.vn/YanNews/2167221/202109/dung-ct-la-ai-thong-tin-tieu-su-streamer-noi-tieng-1ab6dd82.jpeg',
      name: 'Trực Tiếp Game',
      message: 'Alo',
      numberOfUnreadMessage: 4,
      date: '20 minutes ago',
    },
    {
      url: 'https://kenh14cdn.com/thumb_w/660/2018/7/16/1-15317155289701598625253.jpg',
      name: 'Anastasia',
      message: 'Alo',
      numberOfUnreadMessage: 4,
      date: '14/10/2003',
    },
    {
      url: 'https://genk.mediacdn.vn/2019/11/12/photo-2-1573577922659429699603.jpg',
      name: 'Mila',
      message: 'Alo',
      numberOfUnreadMessage: 10,
      date: '2 minutes ago',
    },
    {
      url: 'https://hinhgaixinh.com/wp-content/uploads/2022/04/anh-gai-nga.jpg',
      name: 'Vera',
      message: 'Alo',
      date: '14/10/2003'
    },
    {
      url: 'https://cdn.24h.com.vn/upload/2-2021/images/2021-04-05/3-1617609998-385-width650height750.jpg',
      name: 'Đào Đức Mạnh',
      numberOfUnreadMessage: 4,
      message: 'Alo',
      date: '14/10/2003'
    },
    {
      url: 'https://hinhgaixinh.com/wp-content/uploads/2022/04/anh-gai-nga-1080p.jpg',
      name: 'Nina',
      message: 'Alo',
      date: '14/10/2003'
    },
    {
      url: 'https://images.kienthuc.net.vn/zoom/800/uploaded/nguyenanhson/2021_06_03/4/dep-tua-tinh-dau-hot-girl-nga-lam-netizen-tan-chay-la-ai.jpeg',
      name: 'Anya',
      message: 'Alo',
      date: '28/06/2023'
    },
    {
      url: 'https://cdn.24h.com.vn/upload/1-2022/images/2022-01-16/15-1642305572-411-width650height813.jpg',
      name: 'Mika',
      message: 'Alo',
      date: '14/10/2003'
    },
    {
      url: 'https://cdn.alongwalk.info/vn/wp-content/uploads/2022/03/30050351/image-dac-diem-con-gai-nga-va-10-dieu-thu-vi-khac-toi-thay-o-hanh-tinh-nga-164856623174297.jpg',
      name: 'Natalia',
      numberOfUnreadMessage: 4,
      message: 'Alo',
      date: '14/10/2003'
    },
    {
      url: 'https://afamilycdn.com/2018/4/19/235961975456078424418038640469400543035392n-1524112813114449763769.jpg',
      name: 'Natasha',
      message: 'Alo',
      date: '14/10/2003'
    },
    {
      url: 'https://baonga.com/FileUpload/Images/2_4888.jpg',
      name: 'Annika',
      numberOfUnreadMessage: 4,
      message: 'Alo',
      date: '14/10/2003'
    },
    {
      url: 'https://icdn.dantri.com.vn/thumb_w/640/2019/1/14/photo-1-1547456449366494528388.jpg',
      name: 'Lilia',
      message: 'Alo',
      date: '14/10/2003'
    },
  ]);

  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: 'rgb(242,241,245)',
        height: '100%',
      }}>
      <UIHeader
        title={'Notifications'}
        leftImageName={images.avatar}
        rightIconName={icons.search}
        onPressRightIcon={() => {
          alert('right');
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          height: 70,
        }}>
        <Text style={{color: colors.primary}}>6 unread messages</Text>
        <Image
          style={{
            width: 15,
            height: 15,
            tintColor: colors.inactive,
          }}
          source={icons.bin}
        />
      </View>
      <FlatList
        style={{
          backgroundColor: colors.white,
          marginHorizontal: 10,
          marginVertical: 5,
        }}
        data={users}
        renderItem={({item}) => (
          <ChatItem
            onPress={() => {
                //bên gửi navigation
              navigate('Messenger', {user: item})
            }}
            user={item}
            key={item.url}
          />
        )}
        keyExtractor={item => item.url}
      />
    </View>
  );
}
export default Chat