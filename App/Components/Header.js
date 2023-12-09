import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import AuthContext from '../Context/AuthContext';
import { RoundedInitialsThumbnail } from './../Components/Thumbnail'
import { fakeUser, fakeCompanion } from './../Utils/data'
import Colors from '../Utils/Colors'
import { getInitials } from '../Utils/helpers';

const Header = () => {
  const {userName, role} = useContext(AuthContext)
  // console.log('fromHeader', userName,  role);
  const isLoaded = true
  const roleName = role > 1 ? 'Admin' : 'User'
  // console.log({role: role})
  const initials = getInitials(userName)
  
  
  return (
    isLoaded && (
      <View style={styles.oneLine}>
        <View style={styles.user}>
          <RoundedInitialsThumbnail
            size={40}
            backgroundColor={Colors.GREEN_LIGHT}
            color={Colors.BLACK}
            initials={initials}
          />
          <View style={styles.banda}>
            <View style={styles.title}>
              <Text style={styles.text}>
                Hi {userName}
              </Text>
              <Text style={styles.role}>(Role: {roleName})</Text>              
            </View>
            <View style={styles.subRow}>
              
              <Text style={styles.companion}>
                Companion: {fakeCompanion.name}{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  );
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap:20,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  banda: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 3,
    gap: 2,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 1,
  },
  role: {
    fontSize:10,
    color:Colors.WHITE,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  text:{
    fontFamily:'Poppins-Light',
    fontSize:16,
    textAlign: 'left',
    lineHeight: 20,
    // fontWeight: 'semi-bold',
  },
  subRow:{
    margin: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'space-between',
  },
  companion:{
    fontFamily:'Poppins-Light',
    fontSize:12,
    color:Colors.BLACK,
    lineHeight: 18,
  },



})