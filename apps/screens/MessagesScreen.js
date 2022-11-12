/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  BackHandler,
  StyleSheet,
  Text,
  Alert,
  View,
  StatusBar,
  Image,
  Animated,
  ActivityIndicator,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useMemo} from 'react';
import {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ripple from 'react-native-material-ripple';
import {FlatList, Swipeable} from 'react-native-gesture-handler';
const axios = require('axios');

const MessagesScreen = props => {
  // const [userId, setUserId] = useState(1);
  // const [user, setUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [hasError, setErrorFlag] = useState(false);
  // const changeUserIdHandler = () => {
  //   setUserId(userId => (userId === 3 ? 1 : userId + 1));
  // };

  // useEffect(() => {
  //   const source = axios.CancelToken.source();
  //   const url = `${baseUrl}/api/users/${userId}`;
  //   const fetchUsers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await axios.get(url, {cancelToken: source.token});
  //       if (response.status === 200) {
  //         setUser(response.data.data);
  //         setIsLoading(false);
  //         return;
  //       } else {
  //         throw new Error('Failed to fetch users');
  //       }
  //     } catch (error) {
  //       if (axios.isCancel(error)) {
  //         console.log('Data fetching cancelled');
  //       } else {
  //         setErrorFlag(true);
  //         setIsLoading(false);
  //       }
  //     }
  //   };
  //   fetchUsers();
  //   return () => source.cancel('Data fetching cancelled');
  // }, [userId]);

  // const [data, setData] = useState([]);
  // const [isLoading, setIsloading] = useState(false);
  // const Yscroll = React.useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   setIsloading(true);
  //   getAllUsers();
  //   return () => {};
  // }, []);

  // const getAllUsers = () => {
  //   fetch(`${BASE_URL}/user`, {headers: {'app-id': APP_ID}})
  //     .then(res => res.json())
  //     .then(resJson => {
  //       setData(resJson.data);
  //     })
  //     .catch(console.error)
  //     .finally(() => setIsloading(false));
  // };

  // const renderUser = ({item, index}) => {
  //   const scale = Yscroll.interpolate({
  //     inputRange: [-1, 0, sizeOfItem * index, sizeOfItem * (index + 2)],
  //     outputRange: [1, 1, 1, 0],
  //   });
  //   return (
  //     <Animated.View
  //       style={[
  //         styles.item,
  //         {
  //           transform: [{scale}],
  //         },
  //       ]}>
  //       <Image
  //         style={styles.image}
  //         source={{uri: item.picture}}
  //         resizeMode="contain"
  //         contentContainerStyle={{padding: 20}}
  //       />
  //       <View style={styles.wrapText}>
  //         <Text
  //           style={
  //             styles.fontSize
  //           }>{`${item.title} ${item.firstName} ${item.lastName}`}</Text>
  //       </View>
  //     </Animated.View>
  //   );
  //};

  // const getMovies = async () => {
  //   try {
  //     const response = await fetch('https://reqres.in/api/users?page=');
  //     const json = await response.json();
  //     setUserList(json.data);
  //     //  console.log(json.data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     // setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  // const Item = ({item}) => {
  //   return (
  //     <View
  //       style={{
  //         margin: 10,
  //       }}>
  //       <View
  //         style={{
  //           marginTop: 10,
  //           flexDirection: 'row',
  //         }}>
  //         <View>
  //           <Image
  //             style={{width: 60, height: 60, borderRadius: 30}}
  //             source={{uri: item.avatar}}
  //           />
  //         </View>
  //         <View>
  //           <Text style={{margin: 10, marginStart: 20}}>
  //             {item.first_name + ' ' + item.last_name}
  //           </Text>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  // const renderItem = ({item}) => {
  //   return <Item item={item} />;
  // };
  // const renderFlatList = ({item}) => (
  //   <View
  //     style={{
  //       margin: 10,
  //     }}>
  //     <View
  //       style={{
  //         marginTop: 10,
  //         flexDirection: 'row',
  //       }}>
  //       <View>
  //         <Image
  //           style={{width: 60, height: 60, borderRadius: 30}}
  //           source={{uri: item.avatar}}
  //         />
  //       </View>
  //       <View>
  //         <Text style={{margin: 10, marginStart: 20}}>
  //           {item.first_name + ' ' + item.last_name}
  //         </Text>
  //       </View>
  //     </View>
  //   </View>
  // );

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  /*  //By fetch method pagination implmention
  const getUsers = () => {
    console.log('getData');
    setIsLoading(true);
    //Service to get the data from the server to render
    fetch(`https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`)
      //Sending the currect offset with get request
      .then(response => response.json())
      .then(responseJson => {
        //Successful response
        //setUsers(responseJson.results);
        // console.log(users);
        setUsers([...users, ...responseJson.results]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }; */

  /*  //By Using acios-hook pagination method 1 [give error promise injection]
  const getUsers = () => {
    console.log('getUsers');
    setIsLoading(true);
    axios
      .get(`https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`)
      .then(res => {
        //setUsers(res.data.results);
        console.log(res);
        setUsers([...users, ...res.results]);
        setIsLoading(false);
      });
  };
  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getUsers(), [currentPage]); */

  const baseUrl = 'https://randomuser.me/api';
  //By Using axios-hook pagination method 2
  useEffect(() => {
    const source = axios.CancelToken.source();
    setIsLoading(true);
    const url = `${baseUrl}/?page=${currentPage}&results=10&seed=abc`;
    const fetchUsers = async () => {
      try {
        const res = await axios.get(url, {cancelToken: source.token});
        setUsers([...users, ...res.data.results]);
        console.log(res.data.results);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Data fetching cancelled');
        } else {
          // Handle error
        }
      }
    };
    fetchUsers();
    return () => source.cancel('Data fetching cancelled');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const renderItem = ({item}) => {
    // const leftSwipe = ({progress, dragX}) => {
    //   // const scale = dragX.interpolate({
    //   //   inputRange: [0, 100],
    //   //   outputRange: [0, 1],
    //   //   extrapolate: 'clamp',
    //   // });
    //   return (
    //     <TouchableOpacity>
    //       <View style={styles.deleteBox}>
    //         <Animated.Text>Delete</Animated.Text>
    //       </View>
    //     </TouchableOpacity>
    //   );
    // };

    // const rightSwipe = ({progress, dragX}) => {
    //   // const scale = dragX.interpolate({
    //   //   inputRange: [0, 100],
    //   //   outputRange: [0, 1],
    //   //   extrapolate: 'clamp',
    //   // });
    //   return (
    //     <TouchableOpacity>
    //       <View style={styles.deleteBox}>
    //         <Animated.Text>Delete</Animated.Text>
    //       </View>
    //     </TouchableOpacity>
    //   );
    // };

    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('ChatScreen')}>
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
      </TouchableOpacity>
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
    //Increasing the currentPage for the next API call
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  return (
    <SafeAreaView
      style={{flex: 1, position: 'relative', backgroundColor: COLORS.white}}>
      <StatusBar
        backgroundColor={COLORS.richCarmine}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Ripple
            style={{
              width: 60,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                color: COLORS.richCarmine,
              }}>
              Edit
            </Text>
          </Ripple>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: COLORS.black,
              }}>
              Messages
            </Text>
          </View>
          <Ripple
            style={{
              width: 60,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name="search1"
              size={25}
              color={COLORS.richCarmine}
              style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}
            />
          </Ripple>
        </View>

        {/* <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.wrapperStyle}>
            {!isLoading && !hasError && user && <User userObject={user} />}
          </View>
          <View style={styles.wrapperStyle}>
            {isLoading && <Text> Loading </Text>}
            {!isLoading && hasError && <Text> An error has occurred </Text>}
          </View>
          <View>r
            <Button
              title="Load user"
              onPress={changeUserIdHandler}
              disabled={isLoading}
              style={styles.buttonStyles}
            />
          </View>
        </ScrollView> */}

        {/* <View style={styles.smaill_container}>
          <Text style={styles.headerText_1}>Edit</Text>
        </View>
        <View style={styles.smaill_container_2}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: COLORS.black}}>
            Messages
          </Text>
        </View>
        <View style={styles.smaill_container_1}>
          <AntDesign name="search1" size={25} color={COLORS.richCarmine} />
        </View> */}
      </View>

      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.email}
        ListFooterComponent={renderLoader}
        //onEndReached={prev => prev + 1} //Called when all rows have been rendered and the list has been scrolled to within onEndReachedThreshold of the bottom. The native scroll event is provided.
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.3} //Threshold in pixels (virtual, not physical) for calling onEndReached.
      />

      {/* <FlatList
          style={{backgroundColor: COLORS.white}}
          data={userList}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderItem}
        /> */}
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '8%',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  userList: {
    height: '100%',
  },
  itemWrappersStyle: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    elevation: 0.1,
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
    marginVertical: 15,
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
  // headerText_1: {
  //   fontSize: 25,
  //   color: COLORS.richCarmine,
  // },
  // smaill_container: {
  //   width: '30%',
  //   height: 0.05 * SIZES.height,
  //   margin: 4,
  // },
  // smaill_container_1: {
  //   width: '32%',
  //   height: 0.05 * SIZES.height,
  //   alignItems: 'flex-end',
  //   justifyContent: 'center',
  //   margin: 4,
  // },
  // smaill_container_2: {
  //   width: '30%',
  //   height: 0.05 * SIZES.height,
  //   margin: 4,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  // button: {
  //   paddingHorizontal: 8,
  //   paddingVertical: 6,
  //   borderRadius: 4,
  //   backgroundColor: 'oldlace',
  //   alignSelf: 'flex-start',
  //   marginHorizontal: '1%',
  //   marginBottom: 6,
  //   minWidth: '48%',
  //   textAlign: 'center',
  // },
});
