import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { RoundedInitialsThumbnail } from './../Components/Thumbnail'
import { fakeUser, fakeCompanion } from './../Utils/data'
import Colors from '../Utils/Colors'

const Header = () => {
  // TODO: replace this with user information if it is loaded
  const isLoaded = true
  const role = fakeUser.role > 1 ? 'Admin' : 'User'
  // console.log({role: role})
  return isLoaded && (
    <View style={styles.oneLine}>
      <View style={styles.user}>
        <RoundedInitialsThumbnail 
          size={40}
          backgroundColor={Colors.GREEN_LIGHT}
          color={Colors.BLACK}
          initials = {fakeUser.initials}
        />
        <Text style={styles.text}>Hi {fakeUser.name}
          <Text style={styles.role}> ({role})</Text>
        </Text>
        
      </View>
      <Text style={styles.text}>Companion: {fakeCompanion.name} </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  oneLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.BLUE
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  },
  role: {
    fontSize:10,
    color:Colors.WHITE
  },
  text:{
    fontFamily:'Poppins-Light',
  }


})