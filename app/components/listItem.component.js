import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from '../styles/root.style';

const ListItem = (props) => {
  const {urlImage, author, title} = props.image;
  return (
    <View style={styles.listItemContainer}>
      <Image
        style={styles.listItemImage}
        source={{
          uri: urlImage,
        }}
      />
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>{title}</Text>
        <Text style={styles.listItemAuthor}>{author}</Text>
      </View>
    </View>
  );
};

export default ListItem;
