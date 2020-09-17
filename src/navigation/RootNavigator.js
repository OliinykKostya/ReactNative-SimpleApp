import * as React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from '../screens/News';
import Gallery from '../screens/Gallery';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'News') {
              iconName = focused
                ? require('../assets/newspaper-red.png')
                : require('../assets/newspaper-black.png');
            } else if (route.name === 'Gallery') {
              iconName = focused
                ? require('../assets/list-red.png')
                : require('../assets/list-black.png');
            }

            return <Image source={iconName} style={{ width: 20, height: 20 }}
              resizeMode='contain'
            />;
          },
        })
        }
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Gallery" component={Gallery} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator
