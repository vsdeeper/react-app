/**
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabBar from './components/tab-bar/TabBar';
import Home from './views/home/Home';
import Components from './views/components/Components';
import ActivityIndicator from './views/components/activity-indicator/ActivityIndicator';
import Button from './views/components/button/Button';
import Api from './views/api/Api';
import {ApiIcon, ComponentsIcon, HomeIcon} from './components/icons';
import {StatusBar} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Components: undefined;
  Api: undefined;
  [key: string]: any;
};

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const navigationEmit = (options: any) => {
  return options;
};

const Tabs = createBottomTabNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    animation: 'fade',
  },
  tabBar: props => (
    <TabBar
      {...{
        ...props,
        navigation: {
          ...props.navigation,
          emit: options => navigationEmit(options),
        },
      }}
    />
  ),
  screens: {
    Home: {
      screen: Home,
      options: {
        tabBarLabel: '首页',
        headerShown: false,
        tabBarIcon: props => <HomeIcon {...props} />,
      },
    },
    Components: {
      screen: Components,
      options: {
        tabBarLabel: '组件',
        headerShown: false,
        tabBarIcon: props => <ComponentsIcon {...props} />,
      },
    },
    Api: {
      screen: Api,
      options: {
        tabBarLabel: '接口',
        headerShown: false,
        tabBarIcon: props => <ApiIcon {...props} />,
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Tabs',
  screenOptions: {
    animation: 'ios_from_right',
    headerStyle: {
      backgroundColor: '#f0f0f0',
    },
  },
  screens: {
    Tabs: {
      screen: Tabs,
      options: {
        headerShown: false,
      },
    },
    'Components/ActivityIndicator': {
      screen: ActivityIndicator,
      options: {
        headerTitle: '加载提示',
      },
    },
    'Components/Button': {
      screen: Button,
      options: {
        headerTitle: '加载提示',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App(): React.JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </>
  );
}
