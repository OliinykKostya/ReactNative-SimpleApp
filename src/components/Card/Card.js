import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground
} from 'react-native'
import OpenURLButton from '../OpenURLButton/OpenURLButton';

const Card = ({ item: { urlToImage, title, description, author, url } }) => (
  <View style={styles.card}>
    <View style={styles.imageBox}>
      <ImageBackground
        source={{ uri: urlToImage }}
        style={styles.image} />
    </View>
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.textContent}>
          {title}
        </Text>
        <Text>
          {description}
        </Text>
      </View>
      <View style={styles.linkBox}>
        <Text style={styles.textAuthor}>
          Author: {author}
        </Text>
        <OpenURLButton url={url}>
          link
        </OpenURLButton>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 350,
    margin: 20,
    backgroundColor: "white",
  },
  imageBox: {
    height: 150,
    width: 350,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  contentBox: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  linkBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgrey"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  textAuthor: {
    flex: 1,
    alignSelf: "center"
  },
  textContent: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 5
  }
})

export default Card
