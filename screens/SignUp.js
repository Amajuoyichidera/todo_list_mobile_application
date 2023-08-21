import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const SignUp = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome Onboard</Text>
      <Text style={styles.myP}>Let's help you meet up your tasks</Text>
      <Image source={require('../assets/phone.png')} style={{height: 300, width: 300, marginBottom: 10,}} />
    <TextInput
      style={styles.input}
      placeholder="Username"
      value={username}
      onChangeText={setUsername}
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
      keyboardType="email-address"
      value={email}
      onChangeText={setEmail}
    />
    <TouchableOpacity onPress={() => navigation.navigate('todo')} style={styles.myBtn}>
        <Text style={styles.myBtnText}>Register</Text>
    </TouchableOpacity>

    
    <View style={styles.dont}>
      <Text style={styles.h2}>Dont have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('signin')}>
        <Text style={styles.link}>Sign In</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default SignUp



const styles = StyleSheet.create({
    container: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DDDADA',
      // marginTop: -30
    },
    input: {
      width: '85%',
      height: 50,
      marginVertical: 10,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
    },
    myBtn: {
      backgroundColor: '#078EC7',
      padding: 20,
      width: 350,
      borderRadius: 10,
      marginTop: 20,
  },
  myBtnText: {
    color: 'white',
    textAlign: 'center', 
    fontSize: 16,
},
h1: {
  fontSize: 20,
  fontWeight: '600',
  paddingBottom: 10,
},
  h2 : {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 10,
  },
    myP: {
        lineHeight: 22,
        paddingTop: 10,
        paddingBottom: 42,
        fontSize: 16,
        textAlign: 'center',
    },
    link: {
      color: '#078EC7',
      fontWeight: '600',
      marginTop: 11,
  },
  dont: {
      flexDirection: 'row',
      gap: 10,
      paddingTop: 20,
  }
  });