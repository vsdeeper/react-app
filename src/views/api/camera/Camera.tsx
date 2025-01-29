import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export default function _Camera(): React.JSX.Element {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  if (!hasPermission) {
    requestPermission();
  }
  if (device == null) {
    return <Text>没有找到相机</Text>;
  }

  return (
    <View style={styles.cameraWrapper}>
      <Camera style={styles.camera} device={device} isActive={true} />
      <Pressable style={styles.takePhotoBtn} />
    </View>
  );
}

const styles = StyleSheet.create({
  cameraWrapper: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  takePhotoBtn: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
    width: 75,
    height: 75,
    backgroundColor: 'red',
    borderRadius: 75,
    opacity: 0.4,
  },
});
