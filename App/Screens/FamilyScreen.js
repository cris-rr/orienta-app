import { View, Text } from 'react-native';
import { useContext } from 'react';
import UserContextProvider from '../Context/UserContextProvider';
import Family from '../Screens/Family';
import AuthContext from '../Context/AuthContext';

const FamilyScreen = () => {
  const { isAuthenticated, role } = useContext(AuthContext);
  return (
      <UserContextProvider>
        {(isAuthenticated && role > 1) ? (
          <Family />
        ) : (
          <View style={{flex:1, alignItems:'center' }}>
            <Text>Sorry you don't have access, Only for admins</Text>
          </View>
        )}
      </UserContextProvider>
  );
};

export default FamilyScreen;
