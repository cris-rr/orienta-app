import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import { useContext } from 'react'
import { useFonts } from 'expo-font'
import AuthContext from '../Context/AuthContext';
import imageApp from './../../assets/images/hands3.png'
import Colors from '../Utils/Colors'


const SignIn = ({ navigation }) => {
  const { signIn, isAuthenticated, role, user } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
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

  useEffect(() => {
    if (isAuthenticated && role) {
      // console.log('wasSuccessful', isAuthenticated, role, user)
      navigation.navigate('Home');
    }
  }, [isAuthenticated, role]);
    
  useEffect(() => {
    if (user) {
      console.log('from signIn componet', user)
    }
  }, [user])

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  const handleSubmit = async (event) => {
    try {
      await signIn(form.email, form.password)  
    } catch (error) {
      setError(error.message)
    }
  }

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4', width: '100%' }} onLayout={onLayout}>
      <ScrollView style={styles.scroll}>
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
                onPress={handleSubmit}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
              {error && <Text style={{ color: 'red' }}>{error}</Text>}
        
            </View>
            <View style={styles.footer}>
            <TouchableOpacity
                onPress={() => {
                  // handle link
                }}
                style={{ marginTop: 60 }}>
                <Text style={styles.formFooter}>
                  Don't have an account?{' '}
                  <Text style={{ fontWeight: 'bold' }}>Ask your Quorum presidency</Text>
                </Text>
              </TouchableOpacity>
            </View>
        
          </View>
        </View>
      </ScrollView>
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
  scroll: {
    width: '100%',
    height: '100%',
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