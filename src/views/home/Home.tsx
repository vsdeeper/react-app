import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {Button} from '@react-navigation/elements';
import {type StackNavigation} from '../../App';

export default function Home(): React.JSX.Element {
  const navigation = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  btn: {
    margin: 6,
  },
});
