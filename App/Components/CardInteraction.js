
import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CardInteraction = ({ item, onPress }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 100
  const hasMore = item.comment.length > limit ? true : false
  const comment = isExpanded || !hasMore ? item.comment : item.comment.substring(0, limit) + '...';

  const handlePress = () => {
    if (hasMore) {
      setIsExpanded(!isExpanded);
    }
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        
        <View style={styles.firstRow}>
          <Text style={styles.title}>{item.type}</Text>
          <Text style={styles.description}>{item.effective?'Yes':'No'}</Text>
          <Text style={styles.description}>{item.date}</Text>
          {/* TODO: include companion names when is call from family */}
        </View>
        <Text style={styles.description}>{comment}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    // height: 200,
    backgroundColor: '#e8ecf4',
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },
  firstRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 12,
    color: '#717070',
  },
};

export default CardInteraction;
