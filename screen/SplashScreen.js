import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#dace88'} />
      <Image source={require('./assets/list.png')} style={styles.logo} />
      <Text style={styles.text}>TO DO LIST </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dace88',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 50,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
});
