import { View, Text } from 'react-native';
import { useContext } from 'react';
import UserContextProvider from '../Context/UserContextProvider';
import Users from '../Screens/Users';
import AuthContext from '../Context/AuthContext';
// import AuthContextProvider from '../Context/AuthContextProvider';

const UsersScreen = () => {
  const { isAuthenticated, role } = useContext(AuthContext);
  return (
      <UserContextProvider>
        {(isAuthenticated && role > 1) ? (
          <Users />
        ) : (
          <View style={{flex:1, alignItems:'center' }}>
            <Text>Sorry you don't have access, Only for admins</Text>
          </View>
        )}
      </UserContextProvider>
  );
};

export default UsersScreen;
