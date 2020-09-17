import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

const Header = ({ scrol }) => {
  const _diff_clamp_scroll_y = Animated.diffClamp(scrol, 0, 50)

  const _header_height = Animated.interpolate(_diff_clamp_scroll_y, {
    inputRange: [0, 50],
    outputRange: [50, 0],
    extrapolate: 'clamp'
  })

  const _header_translate_y = Animated.interpolate(_diff_clamp_scroll_y, {
    inputRange: [0, 50],
    outputRange: [0, -50],
    extrapolate: 'clamp'
  })

  const _header_opacity = Animated.interpolate(_diff_clamp_scroll_y, {
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })
  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: _header_height,
          transform: [{ translateY: _header_translate_y }],
          opacity: _header_opacity,
          backgroundColor: "grey",
        }
      ]}
    >
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16
  },
});

export default Header
