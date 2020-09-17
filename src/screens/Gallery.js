import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native'
import Animated from 'react-native-reanimated';
import { fetchData } from '../api/api';
import Header from '../components/Header/Header';
import Spinner from '../components/Spinner/Spinner';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { urlImage } from '../url/url';

const _scroll_y = new Animated.Value(0)
const  Gallery = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
 
  useEffect(() => {
    loadImages()
  }, [])

  const loadImages = async () => {
    setLoading(true)

    await fetchData(urlImage)
      .then(dataFromServer => setData(dataFromServer))
      .catch(() => setError(true))
    setLoading(false)
  }
  
  return (
    <View style={{ flex: 1 }}>
      <Header scrol={_scroll_y}/>
      <Animated.ScrollView
        contentContainerStyle={(loading || error) && { flex: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y:  _scroll_y } }
          }
        ])}
      >
        {loading
          ? <Spinner />
          : error
            ? <ErrorMessage />
            : data.map(image => (
              <View key={image.id} style={styles.imageBox}>
                <Image
                  source={{ uri: image.image }}
                  style={{ flex: 1,
                    width: null,
                    height: null,
                    borderRadius: 10, 
                  }}
                />
              </View>
            ))
        }
      </Animated.ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  imageBox: {
    height: 400,
    margin: 10,
  },
})

export default Gallery
