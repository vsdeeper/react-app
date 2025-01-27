/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './components/tab-bar/TabBar';
import Home from './views/home/Home';
import Components from './views/components/Components';
import Api from './views/api/Api';

export type RootStackParamList = {
  Home: undefined;
  components: undefined;
  api: undefined;
};

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const state = {
  routes: [
    {name: '首页', key: 'Home'},
    {name: '组件', key: 'Components'},
    {name: '接口', key: 'Api'},
  ],
  index: 0,
};
const RootStack = createBottomTabNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: {backgroundColor: 'tomato'},
  },
  tabBar: props => <TabBar {...props} state={state} />,
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
      },
    },
    Components: {
      screen: Components,
      options: {
        headerShown: false,
      },
    },
    Api: {
      screen: Api,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App(): React.JSX.Element {
  return <Navigation />;
}
