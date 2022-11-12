/* eslint-disable no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {FlatList, Swipeable} from 'react-native-gesture-handler';
import {SwipeListView} from 'react-native-swipe-list-view';

const axios = require('axios');

const PostScreen = () => {
  const [users, setUsers] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const renderItem = ({item}) => {
    const leftSwipe = ({progress, dragX}) => {
      // const scale = dragX.interpolate({
      //   inputRange: [0, 100],
      //   outputRange: [0, 1],
      //   extrapolate: 'clamp',
      // });
      return (
        <TouchableOpacity>
          <View style={styles.deleteBox}>
            <Animated.Text>Delete</Animated.Text>
          </View>
        </TouchableOpacity>
      );
    };

    const rightSwipe = ({progress, dragX}) => {
      // const scale = dragX.interpolate({
      //   inputRange: [0, 100],
      //   outputRange: [0, 1],
      //   extrapolate: 'clamp',
      // });
      return (
        <TouchableOpacity>
          <View style={styles.deleteBox}>
            <Animated.Text>Delete</Animated.Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.itemWrappersStyle}>
        <Image
          style={styles.itemImageStyle}
          source={{uri: item.picture.medium}}
        />
        <View style={styles.contentWrapperStyle}>
          <Text
            style={
              styles.txtNameStyle
            }>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text style={styles.txtNameStyle}>{`${item.email}`}</Text>
          <Text style={styles.txtNameStyle}>{`${
            'userName : ' + item.login.username
          }`}</Text>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    //console.log('load more item');
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  useEffect(() => {
    const getUsers = () => {
      setIsLoading(true);
      axios
        .get(
          `https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`,
        )
        .then(res => {
          setUsers(res.data.results);
          //setUsers([...users, ...res.data.results]);
          setIsLoading(false);
        });
    };
    getUsers();
  }, [currentPage, users]);

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item.email}
      ListFooterComponent={renderLoader}
      //onEndReached={prev => prev + 1} //Called when all rows have been rendered and the list has been scrolled to within onEndReachedThreshold of the bottom. The native scroll event is provided.
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0.3} //Threshold in pixels (virtual, not physical) for calling onEndReached.
    />
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  itemWrappersStyle: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemImageStyle: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 50,
  },
  contentWrapperStyle: {
    justifyContent: 'space-around',
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: '#777',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 80,
  },
});
