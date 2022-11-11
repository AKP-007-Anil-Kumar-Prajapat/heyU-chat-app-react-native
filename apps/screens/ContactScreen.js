/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';

const renderFlatList = ({item}) => (
  <View
    style={{
      margin: 10,
    }}>
    <View
      style={{
        marginTop: 10,
        flexDirection: 'row',
      }}>
      <View>
        <Image
          style={{width: 60, height: 60, borderRadius: 30}}
          source={{uri: item.avatar}}
        />
      </View>

      <View>
        <Text style={{margin: 10, marginStart: 20}}>
          {item.first_name + ' ' + item.last_name}
        </Text>
      </View>
    </View>
  </View>
);

const ContactScreen = () => {
  const [userList, setUserList] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=');
      const json = await response.json();
      setUserList(json.data);
      console.log(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <FlatList
      data={userList}
      keyExtractor={(item, index) => String(index)}
      renderItem={renderFlatList}
    />
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});
