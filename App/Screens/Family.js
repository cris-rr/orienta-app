import { StyleSheet, Text, View, FlatList, TextInput, Modal } from 'react-native'
import { useState } from 'react';
import React from 'react'
import Header from '../Components/Header'
import { families } from '../Utils/data'
import CardSimple from '../Components/CardSimple'
import AddButton from '../Components/floatButton'
import FamilyModal from '../Screens/FamilyModal'
import AddFamilyModal from './Modals/AddFamilyModal';

const Family = () => {
  
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(families)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)  
  const [isAddModalVisible, setAddModalVisible] = useState(false)

  const handleCardPress = (id, item) => {
    setSelectedItem(item)
    // TODO: get the familyView data filtered by family
    setIsModalVisible(true)
    
  }
  
  const handleSearchChange = (text) => {
    setSearchTerm(text);
    const filteredItems = families.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredData(filteredItems);
  };

  const handleAddPress = () => {
    setAddModalVisible(true);
  }

  const handleCloseModal = () => {
    setAddModalVisible(false)
  }

  const handleAddData = (newFamily) => {
    console.log({newFamily})
    //TODO: prepare families for the collection, it should include id, fullName and phone, sector
    // setFamilies([...familiess, newFamily])
  }
  
  return (
    <>
      <Header />
      <TextInput
        placeholder="Search"
        onChangeText={handleSearchChange}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10 }}
      />
      <View>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <CardSimple
              item={item}
              onPress={() => handleCardPress(item.id, item)}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <FamilyModal
          setIsModalVisible={setIsModalVisible}
          item={selectedItem}
          onRequestClose={() => setIsModalVisible(false)}
        />
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isAddModalVisible}
        onRequestClose={() => setAddModalVisible(false)}
      >
        <AddFamilyModal
          isVisible={isAddModalVisible}
          onClose={handleCloseModal}
          onSubmit={handleAddData}
        />
      </Modal>

      <AddButton onPress={() => handleAddPress()} />
    </>
  );
}

export default Family

const styles = StyleSheet.create({
  subTitle:{
    paddingVertical:5,
    paddingHorizontal:10
  }
})