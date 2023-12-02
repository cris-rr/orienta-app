import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import imageFamily from './../../assets/images/family2.jpg'
import Colors from '../Utils/Colors'

const Card = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.niceCard}>
        <View style={styles.firstRow}>
          <Image source={imageFamily} style={styles.icon} />
          <View style={styles.description}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.normal}>Phone: {item.phone}</Text>
            <Text style={styles.normal}>Family members: {item.membersQty}</Text>
            <View style={{flexGrow:1, flexDirection:'row'}}>
              <Text style={styles.address}>Address: {item.address}</Text>
            </View>
          </View>
        </View>
      
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  niceCard: {
    // width:'80%',
    paddingVertical: 20,
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
  icon:{
    // borderColor: "#E2E1E0",
    // borderWidth: 1,
    width: 100, 
    height: 100,
    objectFit:'contain',
    marginRight: 10,
    padding: 0 
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
    width:'65%',
  },
  address:{
    marginTop: 5,
    fontSize: 12,
    flex:1,
    width:1
  },
  originalCard: {
    padding: 20, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    marginBottom: 10 
  }
})