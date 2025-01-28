import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {ArrowRight} from '../../components/icons';
import {useNavigation, useTheme} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

const DATA = [
  {
    id: 'Components/ActivityIndicator',
    title: '加载提示',
  },
  {
    id: 'Components/Button',
    title: '按钮',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '弹窗',
  },
];

export default function Components(): React.JSX.Element {
  const {colors} = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<Record<string, any>>>();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Pressable
            style={{...styles.item, backgroundColor: colors.primary}}
            onPress={() => navigation.push(item.id)}>
            <Text style={styles.title}>{item.title}</Text>
            <ArrowRight size={14} color="#fff" />
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 16,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: '#ffffff',
  },
});
