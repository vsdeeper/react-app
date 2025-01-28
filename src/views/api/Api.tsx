import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Api(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Api Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
