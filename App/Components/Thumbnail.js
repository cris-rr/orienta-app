import React from 'react';
import { View, Text } from 'react-native';

const RoundedInitialsThumbnail = ({ initials, size = 40, color = '#fff', backgroundColor = 'blue' }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: color, fontSize: size * 0.45 }}>{initials.toUpperCase()}</Text>
    </View>
  );
};

export {RoundedInitialsThumbnail}