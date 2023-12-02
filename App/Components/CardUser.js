import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import imageFamily from './../../assets/images/family2.jpg'
import Colors from '../Utils/Colors'
import { RoundedInitialsThumbnail } from './../Components/Thumbnail'

const CardUser = ({ item, fullName = '', onPress }) => {
  const name = fullName !=='' ? fullName : item.name
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.niceCard}>
        <View style={styles.firstRow}>
          <RoundedInitialsThumbnail 
            size={40}
            backgroundColor={Colors.GREEN_LIGHT}
            color={Colors.BLACK}
            initials = {item.initials}
          />
          {/* <Image source={imageFamily} style={styles.icon} /> */}
          <View style={styles.description}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.sameLine}>
              <Text style={styles.normal}>Phone: {item.phone}</Text>
              <Text style={styles.normal}>Sector: {item.sector}</Text>
            </View>
          </View>
        </View>
      
      </View>
    </TouchableOpacity>
  )
}

export default CardUser

const styles = StyleSheet.create({
  niceCard: {
    // width:'80%',
    paddingVertical: 10,
    paddingLeft:10,
    paddingRight:20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 7,
    marginVertical: 5,
  },
  name:{ 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginBottom: 5 
  },
  normal:{
    fontSize: 12, 
  },
  firstRow:{
      flexDirection:'row',
  },
  description:{
    width:'85%',
    marginLeft: 10
  },
  address:{
    marginTop: 5,
    fontSize: 12,
    flex:1,
    width:1
  },
  sameLine:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})