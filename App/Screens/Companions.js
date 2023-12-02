import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { companions } from '../Utils/data'
import CardCompanion from '../Components/CardCompanion';
import AddButton from '../Components/floatButton';

const Companions = () => {
  const handleCardPress = (id) => {
    console.log(`Card with ID ${id} was clicked`);
  };
  
  return (
    <>
    <Header />
    <Text style={styles.subTitle}>All companions</Text>
    <View>
      <FlatList
        data={companions}
        renderItem={({ item }) => <CardCompanion item={item} onPress={() => handleCardPress(item.id)} />}
        keyExtractor = {(item) => item.companionCode}
      />
    </View>
    <AddButton />
    </>
  )
}

export default Companions

const styles = StyleSheet.create({
  subTitle:{
    paddingVertical:5,
    paddingHorizontal:10
  }
})