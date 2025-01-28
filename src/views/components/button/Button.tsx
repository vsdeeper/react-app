import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import base from '../../../styles/base';

export default function _Button(): React.JSX.Element {
  return (
    <View style={[base.container, styles.container]}>
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
    padding: 30,
  },
  button: {
    margin: 6,
  },
});
