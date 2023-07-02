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
import {SafeAreaView} from 'react-navigation';
import {
  user as UserRepository,
  population as PopulationRepository,
} from '../repositories';
import {convertDateTimeToString} from '../validations/dateTime';
function Profile(props) {
  const [user, setUser] = useState({});
  const [populations, setPopulations] = useState({})
  //gọi khi thẻ đã load xong rồi didMount
  useEffect(() => {
    UserRepository.getUserDetails()
      .then(responseUser => setUser(responseUser))
    PopulationRepository.getPopulation()
      .then(responsePopulations => setPopulations(responsePopulations))

  }, []);
  //UserRepository.getUserDetails()
  const {
    email,
    dateOfBirth,
    gender,
    userId,
    address,
    phone,
    userName,
    url,
    registeredDate,
  } = user;
  return (
    <SafeAreaView
    style={{
      flex: 1,
      paddingTop: 50,
      paddingLeft: 20,
    }}>
      <Image
        style={{
          width: 160,
          height: 160,
          borderRadius: 100,
          alignSelf: 'center',
        }}
        source={{uri: url}}
      />
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Username:{' '}
          </Text>
          <Text style={{fontSize: 16}}>{userName}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Email:{' '}
          </Text>
          <Text style={{fontSize: 16}}>{email}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            DOB:{' '}
          </Text>
          <Text style={{fontSize: 16}}>
            {convertDateTimeToString(dateOfBirth)}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Gender:{' '}
          </Text>
          <Text style={{fontSize: 16}}>{gender}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Address:{' '}
          </Text>
          <Text style={{fontSize: 16}}>{address}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Phone:{' '}
          </Text>
          <Text style={{fontSize: 16}}>{phone}</Text>
        </View>
      </View>
      <View>
        <Text>{JSON.stringify(populations)}</Text>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
