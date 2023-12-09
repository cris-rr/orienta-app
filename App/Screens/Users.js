import { StyleSheet, Text, View, FlatList, TextInput, Modal } from 'react-native'
import { useState, useContext } from 'react';
import React from 'react'
import UserContext from '../Context/UserContext'
import Header from '../Components/Header'
// import { users } from '../Utils/data'
import CardUser from '../Components/CardUser'
import AddButton from '../Components/floatButton'
import AddUserModal from './Modals/AddUserModal';

const Users = () => {
  const {users, filteredData, setFilteredData, addUser} = useContext(UserContext)
  // const users = useContext(UserContext)
  // console.log('fromUsers', users.length);

  const [isAddModalVisible, setAddModalVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  
  if (!users) {
    console.log('No users');
    return <><View><Text>Loading...</Text></View></>
  }
  
  const handleCardPress = (id) => {
    console.log(`Card with ID ${id} was clicked`);
  }
  
  const handleSearchChange = (text) => {
    setSearchTerm(text);
    const filteredItems = users.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    })
    setFilteredData(filteredItems);
  }

  const handleAddPress = () => {
    setAddModalVisible(true);
  }

  const handleCloseModal = () => {
    setAddModalVisible(false)
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
          // initialNumToRender={70}
          data={filteredData}
          renderItem={({ item }) => (
            <CardUser
              item={item}c
              fullName={item.fullName}
              onPress={() => handleCardPress(item.id)}
            />
          )}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isAddModalVisible}
        onRequestClose={() => setAddModalVisible(false)}
      >
        <AddUserModal
          isVisible={isAddModalVisible}
          onClose={handleCloseModal}
          // onSubmit={handleAddData}
        />
      </Modal>
      <AddButton onPress={() => handleAddPress()} />
    </>
  );
}

export default Users

const styles = StyleSheet.create({
  subTitle:{
    paddingVertical:5,
    paddingHorizontal:10
  },
  list: {
    paddingBotton:20
  }
})