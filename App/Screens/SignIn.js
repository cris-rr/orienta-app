import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';


import Colors from '../Utils/Colors'
import imageApp from './../../assets/images/hands3.png'

const SignIn = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    // 'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    // 'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    // 'Poppins-ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf')
  })
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    } prepare()
  }, [])
    
    const onLayout = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync()
      }
    }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4', width: '100%' }} onLayout={onLayout}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={imageApp}
            style={styles.headerImg}/>

          <Text style={styles.title}>
            Sign in to <Text style={{ color: '#075eec' }}>Orienta</Text>
          </Text>

          <Text style={styles.subtitle}>
            Helping priesthood to serve better
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home')
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
            
            
          </View>
          <View style={styles.footer}>
          <TouchableOpacity
              onPress={() => {
                // handle link
              }}
              style={{ marginTop: 60 }}>
              <Text style={styles.formFooter}>
                Don't have an account?{' '}
                <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:24,
    paddingVertical: 10,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 24,
    marginTop: 8
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 33,
    // fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 3,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 15,
    // fontWeight: '500',
    color: '#929292',
    marginTop: -10,
    textAlign: 'center',
  },
  form: {
    marginTop:-10,
    marginBottom: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    // fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 8,
  },
  inputLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    // fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    // fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    // backgroundColor: '#075eec',
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    lineHeight: 26,
    // fontWeight: '600',
    color: '#fff',
  },

  footer: {
    marginTop: 30,
    // marginBottom: -50
  }
});

export default SignIn