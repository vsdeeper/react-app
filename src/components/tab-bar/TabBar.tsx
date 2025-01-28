import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Text, PlatformPressable} from '@react-navigation/elements';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';

export default function TabBar(props: BottomTabBarProps): React.JSX.Element {
  const {state, navigation, descriptors} = props;
  const {colors} = useTheme();

  return (
    <View style={styles.tabBar}>
      {state.routes?.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          }
        };

        return (
          <View key={route.key} style={styles.tabBtn}>
            <PlatformPressable
              accessibilityState={isFocused ? {selected: true} : {}}
              pressColor="rgba(0, 0, 0, 0.1)"
              onPress={onPress}
              style={styles.pressable}>
              {options.tabBarIcon?.({
                focused: isFocused,
                color: isFocused ? colors.primary : colors.text,
                size: 20,
              })}
              <Text
                style={{
                  ...styles.label,
                  color: isFocused ? colors.primary : colors.text,
                }}>
                {typeof label === 'string'
                  ? label
                  : label({
                      focused: isFocused,
                      color: colors.text,
                      position: 'below-icon',
                      children: '',
                    })}
              </Text>
            </PlatformPressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 48,
    backgroundColor: '#fff',
  },
  tabBtn: {
    flex: 1,
    borderRadius: 100,
    overflow: 'hidden',
  },
  pressable: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});
