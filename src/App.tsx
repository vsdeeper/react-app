/**
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {StrictMode} from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {type NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabBar from './components/tab-bar/TabBar';
import Home from './views/home/Home';
import Components from './views/components/Components';
import Api from './views/api/Api';
import {ApiIcon, ComponentsIcon, HomeIcon} from './components/icons';
import {StatusBar} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Components: undefined;
  Api: undefined;
};

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const navigationEmit = (options: any) => {
  return options;
};

const RootStack = createBottomTabNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    animation: 'fade',
    headerStyle: {backgroundColor: 'tomato'},
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

const Navigation = createStaticNavigation(RootStack);

export default function App(): React.JSX.Element {
  return (
    <StrictMode>
      <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </StrictMode>
  );
}
