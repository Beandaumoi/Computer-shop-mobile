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
import {UIHeader} from '../../components';
import MessengerItem from './messengerItem';
function Messenger(props) {
  const [chatHistory, setChatHistory] = useState([
    {
      url: 'https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/321773430_931261117864705_5658690925253103817_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=q_AYp8RcLpwAX-EP2TJ&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBggdxJc2DInKFPHMs1sDjFv07Q42Xpb2NNCbRHCEZZuw&oe=64A01869',
      isSender: false,
      isShowUrl: true,
      messengers: 'Hello how are you? In the tomorrow morning do you want to go to school with me? I just bought a new bike :)',
      timeStamp: 1687942845000
    },
    {
      url: 'https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/321773430_931261117864705_5658690925253103817_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=q_AYp8RcLpwAX-EP2TJ&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBggdxJc2DInKFPHMs1sDjFv07Q42Xpb2NNCbRHCEZZuw&oe=64A01869',
      isSender: false,
      isShowUrl: false,
      messengers: 'Hello? Can you reply me? What your opinion?',
      timeStamp: 1693213245000
    },
    {
      url: 'https://static2.yan.vn/YanNews/2167221/202109/dung-ct-la-ai-thong-tin-tieu-su-streamer-noi-tieng-1ab6dd82.jpeg',
      isSender: true,
      isShowUrl: true,
      messengers: 'I\'m sorry I think tomorrow I can\'t go with you cause I have to stream',
      timeStamp: 1695891645000
    },
    {
      url: 'https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/321773430_931261117864705_5658690925253103817_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=q_AYp8RcLpwAX-EP2TJ&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBggdxJc2DInKFPHMs1sDjFv07Q42Xpb2NNCbRHCEZZuw&oe=64A01869',
      isSender: false,
      isShowUrl: true,
      messengers: 'It is okay :) no problem',
      timeStamp: 1695895245000
    },
    {
      url: 'https://static2.yan.vn/YanNews/2167221/202109/dung-ct-la-ai-thong-tin-tieu-su-streamer-noi-tieng-1ab6dd82.jpeg',
      isSender: true,
      isShowUrl: true,
      messengers: 'oke',
      timeStamp: 1695895255000
    },
    {
      url: 'https://static2.yan.vn/YanNews/2167221/202109/dung-ct-la-ai-thong-tin-tieu-su-streamer-noi-tieng-1ab6dd82.jpeg',
      isSender: true,
      isShowUrl: false,
      messengers: ':)',
      timeStamp: 1695895855000
    },
    {
      url: 'https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/321773430_931261117864705_5658690925253103817_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=q_AYp8RcLpwAX-EP2TJ&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBggdxJc2DInKFPHMs1sDjFv07Q42Xpb2NNCbRHCEZZuw&oe=64A01869',
      isSender: false,
      isShowUrl: true,
      messengers: ':)',
      timeStamp: 1695982255000
    },
    {
      url: 'https://static2.yan.vn/YanNews/2167221/202109/dung-ct-la-ai-thong-tin-tieu-su-streamer-noi-tieng-1ab6dd82.jpeg',
      isSender: true,
      isShowUrl: true,
      messengers: 'ALo',
      timeStamp: 1695895856000
    },
    {
      url: 'https://static2.yan.vn/YanNews/2167221/202109/dung-ct-la-ai-thong-tin-tieu-su-streamer-noi-tieng-1ab6dd82.jpeg',
      isSender: true,
      isShowUrl: false,
      messengers: 'ALo',
      timeStamp: 1695895857000
    },
    {
      url: 'https://static2.yan.vn/YanNews/2167221/202109/dung-ct-la-ai-thong-tin-tieu-su-streamer-noi-tieng-1ab6dd82.jpeg',
      isSender: true,
      isShowUrl: false,
      messengers: 'ALo',
      timeStamp: 1695895858000
    },
    {
      url: 'https://static2.yan.vn/YanNews/2167221/202109/dung-ct-la-ai-thong-tin-tieu-su-streamer-noi-tieng-1ab6dd82.jpeg',
      isSender: true,
      isShowUrl: false,
      messengers: 'ALo',
      timeStamp: 1695895859000
    },
  ])
  //bên nhận navigation
  const {url, name} = props.route.params.user
  //navigation
  const {navigation, route} = props;
  const {navigate, goBack} = props.navigation
  const [typedText, setTypedText] = useState('')
    return<View style={{flexDirection: 'column',backgroundColor: 'rgb(247, 247, 247)',height: '100%'}}>
    <UIHeader 
    title={name}
    leftIconName = {icons.leftArrow}
    rightIconName = {icons.dots}
    onPressLeftIcon = {() => {
        goBack()
    }}
    onPressRightIcon = {() => {
        alert ('oke')
    }}
    />

<FlatList
        style={{
         
        }}
        data={chatHistory}
        renderItem={({item}) => (
          <MessengerItem
            onPress={() => {
               alert ('ss')
            }}
            item = {item}
          />
        )}
        keyExtractor={item => item.timeStamp}
      />
<View style={{
  flexDirection: 'row', 
  marginLeft: 10
  }}>
<TextInput 
      onChangeText={(typedText) => {
        setTypedText (typedText)
      }}
       style={{color: colors.black, 
        paddingLeft: 10, 
        marginBottom: 30,
        padding: 10,
        backgroundColor:colors.placeholder,
        flex: 1,
        borderRadius: 50
      }}
       placeholder = 'Enter text....'
       placeholderTextColor={colors.placeholder}
       value={typedText}
       />
       <Image source={icons.send} style={{
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginBottom: 30,
        marginHorizontal: 10,
        tintColor: colors.primary
       }} />
</View>

</View>
}

export default Messenger