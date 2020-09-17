import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native'
import Animated from 'react-native-reanimated';
import { fetchData } from '../api/api';
import Header from '../components/Header/Header';
import Spinner from '../components/Spinner/Spinner';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import ListOfNews from '../components/ListOfNews/ListOfNews';
import { urlNews } from '../url/url';

const _scroll_y = new Animated.Value(0)

const Home = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = async () => {
    setLoading(true)

    await fetchData(urlNews)
      .then(data => setNews(data.articles))
      .catch(() => setError(true))
    setLoading(false)
  }

  return (
    <View style={{ flex: 1 }}>
      <Header scrol={_scroll_y} />
      <Animated.ScrollView
        contentContainerStyle={(loading || error) && { flex: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: _scroll_y } }
          }
        ])}
      >
        {loading
          ? <Spinner />
          : error
            ? <ErrorMessage />
            : <View style={styles.list}>
              <ListOfNews news={news} />
            </View>
        }
      </Animated.ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Home
