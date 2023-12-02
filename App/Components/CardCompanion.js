import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import imagen from './../../assets/images/companion3.png'
import Colors from '../Utils/Colors'
import SmallButton from './SmallButton'

const CardCompanion = ({ item, onPress }) => {
  const active = item.status ? 'Active' : 'Inactive'
  return (
    // <TouchableOpacity onPress={onPress}>
      <View style={styles.niceCard}>
        <Image source={imagen} style={styles.icon} />
        <View style={styles.firstRow}>
          
          <View style={styles.description}>
            <Text style={styles.name}>Senior: {item.senior.fullName}</Text>
            <Text style={styles.normal}>Phone: {item.senior.phone}</Text>
            <Text style={styles.name}>Junior: {item.junior.fullName}</Text>
            <Text style={styles.normal}>Phone: {item.junior.phone}</Text>
            
            <View style={styles.sameLine}>
              <Text style={styles.normal}>Sector: {item.sector}</Text>
              <Text style={styles.normal}>Status: {active}</Text>
            </View>
          </View>
          <View style={styles.actions}>
            <SmallButton text='Families' action='Edit' />
            <SmallButton text ='Delete' action='Delete'/>
          </View>
  
        </View>
      
      </View>
    // </TouchableOpacity>
  )
}

export default CardCompanion

const styles = StyleSheet.create({
  niceCard: {
    // width:'80%',
    
    flexDirection: 'row',
    marginVertical: 5,
    paddingVertical: 5,
    paddingLeft:5,
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
    
  },
  icon:{
    // borderColor: "#E2E1E0",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    width: 70, 
    height: '100%',
    objectFit:'cover',
    marginRight: 10,
    padding: 0 
  },
  name:{ 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginBottom: 2 
  },
  normal:{
    fontSize: 12,
    marginBottom:5 
  },
  firstRow:{
    flexDirection:'row',
    // marginVertical: 5,
    paddingVertical: 10,
  },
  description:{
    // borderWidth:1,
    width:'65%',
  },
  sameLine:{
    flexDirection: 'row',
    gap:20,
    marginBottom:0
  },
  actions:{
    // borderWidth:1,
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'center'
  }

})