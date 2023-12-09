import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import fetchAxiosData from '../Services/fetchAxiosData';

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const data =fetchAxiosData('users/').then((data) => {
      setUsers(data)
      setFilteredData(data)
    })
  }, [])

  const addUser = (newUser) => {
    try {
      const data = fetchAxiosData('users/', 'POST', newUser).then((data) => {
        // console.log('in addUser', {data})
        setUsers((prevUsers) => [...prevUsers, data])
        setFilteredData((prevUsers) => [...prevUsers, data])
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <UserContext.Provider value={{ users, setUsers, filteredData, setFilteredData, addUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider