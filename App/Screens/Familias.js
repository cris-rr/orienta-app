import { StyleSheet, Text, View, FlatList, Modal } from 'react-native'
import React, {useState} from 'react'
import Header from '../Components/Header'
import { familiesAssigned } from '../Utils/data'
import Card from '../Components/Card';
import FamilyModal from '../Screens/FamilyModal'

const Familias = () => {
  const [isModalVisible, setIsModalVisible] = useState(false) 
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardPress = (id, item) => {
    // console.log(`Card with ID ${id} was clicked`)
    setSelectedItem(item)
    setIsModalVisible(true)
  };
  
  return (
    <>
    <Header />
    <Text style={styles.subTitle}>Your Assigned Families</Text>
    <View>
      <FlatList
        data={familiesAssigned}
        renderItem={({ item }) => <Card item={item} onPress={() => handleCardPress(item.id, item)} />}
        keyExtractor = {(item) => item.id}
      />
    </View>
    <Modal
      animationType='slide'
      transparent={true}
      visible= {isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
      >
      <FamilyModal
        setIsModalVisible = {setIsModalVisible}
        item = {selectedItem}
        onRequestClose={() => setIsModalVisible(false)}
      />
    </Modal>
    </>
  )
}

export default Familias

const styles = StyleSheet.create({
  subTitle:{
    paddingVertical:5,
    paddingHorizontal:10,
    fontFamily:'Poppins-Regular',
  }
})