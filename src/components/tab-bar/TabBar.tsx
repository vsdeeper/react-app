import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Text, PlatformPressable} from '@react-navigation/elements';

export default function TabBar({
  state,
  navigation,
}: {
  state: {
    routes?: {name: string; key: string; params?: Record<string, any>}[];
    index?: number;
  };
  navigation: Record<string, any>;
}): React.JSX.Element {
  const {colors} = useTheme();
  return (
    <View style={styles.tabBar}>
      {state.routes?.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.key, route.params);
          }
        };

        return (
          <PlatformPressable
            key={route.key}
            accessibilityState={isFocused ? {selected: true} : {}}
            onPress={onPress}
            style={styles.tabBtn}>
            <Text style={{color: isFocused ? colors.primary : colors.text}}>
              {route.name}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
  },
  tabBtn: {
    flex: 1,
  },
});
