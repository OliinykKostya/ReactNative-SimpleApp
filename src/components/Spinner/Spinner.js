import React from "react"
import {View, ActivityIndicator } from 'react-native'

const Spinner = () => (
  <View style={{ flex: 1, justifyContent: "center", }}>
    <ActivityIndicator size="large" color="grey" />
  </View>
)

export default Spinner
