import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';

export default function _Button(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="点我" onPress={() => Alert.alert('抓住你了~')} />
      </View>
      <View style={styles.button}>
        <Button
          title="点我"
          color="#f194ff"
          onPress={() => Alert.alert('抓住你了~')}
        />
      </View>
      <View style={styles.button}>
        <Button title="禁用状态" disabled />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  button: {
    margin: 6,
  },
});
