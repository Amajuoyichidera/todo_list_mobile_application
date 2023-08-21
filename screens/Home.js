import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/home.png')} style={{height: 400, width: 300,}} />
      <Text style={styles.h1}>Get Things Done With Todo</Text>
      <Text style={styles.myP}>A to-do list app is an important tool {'\n'} that can help you stay organized, {'\n'} focused, and productive.</Text>
      <TouchableOpacity onPress={() =>
        navigation.navigate('signin')} style={styles.myBtn}>
        <Text style={styles.myBtnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#F2EFEF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
        fontSize: 20,
        fontWeight: '600',
        paddingBottom: 30,
        paddingTop: 30
    },
    myP: {
        lineHeight: 22,
        paddingTop: 10,
        paddingBottom: 42,
        fontSize: 16,
        textAlign: 'center',
    },
    myBtn: {
        backgroundColor: '#078EC7',
        padding: 20,
        width: 300,
        borderRadius: 10,
    },
    myBtnText: {
        color: 'white',
        textAlign: 'center', 
        fontSize: 16,
    }
  });
  