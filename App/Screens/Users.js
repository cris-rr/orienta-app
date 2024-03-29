import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import { useState } from 'react';
import React from 'react'
import Header from '../Components/Header'
import { users } from '../Utils/data'
import CardUser from '../Components/CardUser'
import AddButton from '../Components/floatButton'

const Users = () => {
  const handleCardPress = (id) => {
    console.log(`Card with ID ${id} was clicked`);
  }
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(users)  
  
  const handleSearchChange = (text) => {
    setSearchTerm(text);
    const filteredItems = users.filter((item) => {
      return item.fullName.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredData(filteredItems);
  };
  return (
    <>
    <Header />
    {/* <Text style={styles.subTitle}>All families</Text> */}
    <TextInput
      placeholder="Search"
      onChangeText={handleSearchChange}
      style={{ borderWidth: 1, borderColor: '#ccc', padding: 10 }}
    />
    <View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <CardUser item={item} fullName={item.fullName} onPress={() => handleCardPress(item.id)} />}
        keyExtractor = {(item) => item.id}
      />
    </View>
    <AddButton />
    </>
  )
}

export default Users

const styles = StyleSheet.create({
  subTitle:{
    paddingVertical:5,
    paddingHorizontal:10
  }
})