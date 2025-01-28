import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {Button} from '@react-navigation/elements';
import {type StackNavigation} from '../../App';
import base from '../../styles/base';

export default function Home(): React.JSX.Element {
  const navigation = useNavigation<StackNavigation>();

  return (
    <View style={[base.container, styles.container]}>
      <Button
        style={styles.btn}
        variant="filled"
        onPress={() => navigation.navigate('Components')}>
        查看组件
      </Button>
      <Button
        style={styles.btn}
        variant="filled"
        onPress={() => navigation.navigate('Api')}>
        查看接口
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    margin: 6,
  },
});
