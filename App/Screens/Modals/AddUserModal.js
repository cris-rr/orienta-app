import { StyleSheet, Text, View, Switch, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { colors } from 'react-native-elements'
import NumericInput from 'react-native-numeric-input'
import Colors from '../../Utils/Colors'

const AddUserModal = ({onClose, onSubmit}) => {
  const [formData, setFormData] = useState({name: '', email:'', member_code:'', phone: '', role:1, sector: '', status: true, password:''})
  
  const handleChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event) => {
    const newData = { id: Math.random(), ...formData }
    console.log('in AddFamilyModal', {newData})
    onSubmit(newData)
    onClose()
  }
  return (
    <View style={styles.centeredView}>
      <ScrollView style={styles.scroll}>
        <View style={styles.modalView}>
          <Text style={styles.title}>User</Text>
          <View style={styles.content}>
            <View style={styles.row}>
              <Text>Name:</Text>
              <TextInput
                onChangeText={(value) => handleChange('name', value)}
                placeholder="User name"
                style={styles.input}
                value={formData.name}
              />
            </View>
            <View style={styles.row}>
              <Text>Email:</Text>
              <TextInput
                onChangeText={(value) => handleChange('email', value)}
                placeholder="Enter your email"
                style={styles.input}
                value={formData.email}
              />
            </View>
            <View style={styles.row}>
              <Text>Member code:</Text>
              <TextInput
                onChangeText={(value) => handleChange('member_code', value)}
                placeholder="Member code"
                style={styles.input}
                value={formData.member_code}
              />
            </View>

            <View style={styles.row}>
              <Text>Phone:</Text>
              <TextInput
                onChangeText={(value) => handleChange('phone', value)}
                placeholder="Phone"
                style={styles.input}
                value={formData.phone}
              />
            </View>
            <View style={styles.row}>
              <Text>Role (1 to 3):</Text>
              <NumericInput
                onChange={(value) => handleChange('role', value)}
                value={formData.role}
                minValue={1}
                maxValue={3}
              />
            </View>
            
            <View style={styles.row}>
              <Text>Passwrod:</Text>
              <TextInput
                onChangeText={(value) => handleChange('password', value)}
                placeholder="Password"
                style={styles.input}
                value={formData.password}
              />
            </View>

            <View style={styles.bottomRow}>
              <View style={styles.status}>
                <Text>Is this member active? </Text>
                <Switch
                  style={styles.switch}
                  onValueChange={(value) => handleChange('status', value)}
                  value={formData.status}
                />
              </View>

              <View style={styles.actions}>
                <TouchableOpacity onPress={onClose} style={styles.actionButton}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={[
                    styles.actionButton,
                    { backgroundColor: Colors.BLUE }
                  ]}
                >
                  <Text>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default AddUserModal

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 70,
      
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      // paddingHorizontal: 35,
      paddingBottom: 35,
      // alignItems: "center",
      width: '90%',
      height: '90%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    title: {
      backgroundColor: '#007bff',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      padding: 10,
      margin: 0.5,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
      alignSelf: 'stretch'
    },
    content: {
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    column: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      // alignItems: 'center',
      gap: 5,
      marginTop: 10,
      marginBottom: 10,
    },
    status: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    switch: {
      transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] // scale the switch
    },
    input: {
      paddingBottom: 10,
      // marginBottom: 10,
      marginLeft: 10,
      // borderBottomWidth: 1,
      borderBottomColor: Colors.BLUE,
      borderWidth: 0.5,
      borderColor: colors.grey4,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      width: '60%',
    },
    inputScroll: {
      height: 65,
      borderWidth: 0.5,
      borderColor: colors.grey4,
      borderRadius: 10,
      padding: 10,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    actionButton: {
      backgroundColor: Colors.PINK_DARK,
      padding: 10,
      borderRadius: 20,
      width: '40%',
      alignItems: 'center',
    },
    scroll: {
      // width: '100%',
      height: '100%',
    },
    
})