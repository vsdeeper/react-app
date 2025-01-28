import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import base from '../../../styles/base';

export default function _ActivityIndicator(): React.JSX.Element {
  return (
    <View style={[base.container, styles.container, styles.horizontal]}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
