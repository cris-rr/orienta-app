import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

import imageApp from './../../assets/images/handsColors.png'
import Colors from '../Utils/Colors'

const Login = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf')
  })


  return (
    <View style={styles.mainContainer}>
      <Image source={imageApp}
      style={styles.imageApp}/>
      <View style={styles.login}>
        <Text style={styles.title}>Orienta</Text>
        <Text style={styles.moto}>Helping priesthood to serve better</Text>
      </View>
      
      
    
    </View>
    
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE
  },
  imageApp:{
    width: 400,
    height: 400,
    marginTop: 0,
    objectFit: 'contain'
  },
  login:{
    display: 'flex',
    alignItems: 'center',
    height: '50%',
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: -30,
    backgroundColor: Colors.BLUE,
    paddingTop: 20
  },
  title:{
    // color: Colors.WHITE,
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    
  },
  moto:{
    // color: Colors.WHITE,
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 12,
    marginTop: -5
  }
})

export default Login