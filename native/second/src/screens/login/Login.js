import { View, Text, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './login.style'
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup';
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { jwtDecode } from 'jwt-decode'
import { decode } from "base-64";
global.atob = decode;

const loginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required!').email('Please enter a valid email address!'),
  password: Yup.string().required('Password is required!').min(6, 'Password must be min 6 character!')
})

const Login = ({ navigation }) => {
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()

  useEffect(() => {
    //sendLogin()
    checkToken()
  }, [])

  const sendLogin = async () => {
    let loginResponse = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })
    })
      .then(res => res.json())
      await AsyncStorage.setItem('dummy-token', loginResponse.token)
  }

  const checkToken = async() => {
    let token = await AsyncStorage.getItem('dummy-token')
    if(token){
      let date = new Date()
      let decoded = jwtDecode(token)
      let nowDate = date.getTime() / 1000
      if(decoded.exp > nowDate){
        navigation.navigate('Home')
      }else{
        axios.post('/refresh-token')
      }
    }
  }


  const handleLogin = async (values) => {
    try {
      // let requestObj = {
      //   email: email,
      //   password: password
      // }
      let loginResponse = await axios.post('/auth/login', values)
      if (loginResponse.data?.token) {
        navigation.navigate('Home')
        Toast.show({
          type: 'success',
          text1: 'Welcome'
        })
        await AsyncStorage.setItem('access-token', loginResponse.data.token)
      }
    } catch (error) {
      console.log(error)
      if (error.response) {
        return Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error.response.data.message
        })
      }
      console.log('Login Error', error.response.data)

    }
  }

  return (
    <View>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => handleLogin(values)}
        validationSchema={loginSchema}
      >
        {({ handleChange, values, handleSubmit, touched, errors, handleBlur }) => (
          <>
            <View style={styles.conatiner}>
              <Text>Email</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.input}
                keyboardType='email-address' />
              {
                errors.email && touched.email ?
                  <Text style={styles.error}>{errors.email}</Text> : null
              }
            </View>
            <View style={styles.conatiner}>
              <Text>Password</Text>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.input}
                secureTextEntry={true} />
              {
                errors.password && touched.password ?
                  <Text style={styles.error}>{errors.password}</Text> : null
              }
            </View>
            <View style={styles.buttonStyle}>
              <Button title='Login' onPress={handleSubmit} color={'#00CED1'} />
            </View>
          </>
        )}

      </Formik>
    </View>
  )
}

export default Login