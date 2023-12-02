import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import { useState } from 'react';
import React from 'react'
import Header from '../Components/Header'
import { families } from '../Utils/data'
import CardSimple from '../Components/CardSimple';
import AddButton from '../Components/floatButton';

const Family = () => {
  const handleCardPress = (id) => {
    console.log(`Card with ID ${id} was clicked`);
  }
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(families)  

  const handleSearchChange = (text) => {
    setSearchTerm(text);
    const filteredItems = families.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
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
        renderItem={({ item }) => <CardSimple item={item} onPress={() => handleCardPress(item.id)} />}
        keyExtractor = {(item) => item.id}
      />
    </View>
    <AddButton />
    </>
  )
}

export default Family

const styles = StyleSheet.create({
  subTitle:{
    paddingVertical:5,
    paddingHorizontal:10
  }
})