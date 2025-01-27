import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@react-navigation/elements';
import {StackNavigation} from '../../App';

export default function Home(): React.JSX.Element {
  const navigation = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.push('api')}>Go to Details</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
