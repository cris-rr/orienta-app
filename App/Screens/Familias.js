import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { familiesAssigned } from '../Utils/data'
import Card from '../Components/Card';

const Familias = () => {
  const handleCardPress = (id) => {
    console.log(`Card with ID ${id} was clicked`);
  };
  
  return (
    <>
    <Header />
    <Text style={styles.subTitle}>Your Assigned Families</Text>
    <View>
      <FlatList
        data={familiesAssigned}
        renderItem={({ item }) => <Card item={item} onPress={() => handleCardPress(item.id)} />}
        keyExtractor = {(item) => item.id}
      />
    </View>
    </>
  )
}

export default Familias

const styles = StyleSheet.create({
  subTitle:{
    paddingVertical:5,
    paddingHorizontal:10
  }
})