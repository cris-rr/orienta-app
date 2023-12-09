import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons' 
import { FontAwesome5 } from '@expo/vector-icons'; 
import CompanionScreen from '../Screens/CompanionScreen'
import FamilyScreen from '../Screens/FamilyScreen'
import UsersScreen from '../Screens/UsersScreen'
import FamiliasScreen from '../Screens/FamiliasScreen'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShow:false
    }}>
      <Tab.Screen name='home' component={FamiliasScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen name='companions' component={CompanionScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hands-helping" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen name='families' component={FamilyScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="family-restroom" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen name='user' component={UsersScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation