import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  AppState,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {Photos} from '../../../components/icons';

export default function _Camera(): React.JSX.Element {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  const isFocused = useIsFocused();
  const appState = useRef(AppState.currentState);
  const cameraRef = useRef<Camera>(null);
  const [photoUri, setPhotoUri] = useState('');

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
    });
    return subscription.remove();
  }, []);

  if (!hasPermission) {
    requestPermission();
  }
  if (device == null) {
    return <Text>没有找到相机</Text>;
  }

  const handleTakePhoto = async () => {
    const photo = await cameraRef.current?.takePhoto();
    if (!photo) {
      return;
    }
    const {node} = await CameraRoll.saveAsset(`file://${photo.path}`, {
      type: 'photo',
    });
    setPhotoUri(node.image.uri);
  };

  const handlePhotos = async () => {
    if (photoUri) {
      const supported = await Linking.canOpenURL('photos-library:');
      if (supported) {
        Linking.openURL(
          `photos-library://asset?id=${encodeURIComponent(photoUri)}`,
        );
      }
    }
  };

  const handleError = (e: Error) => {
    if (e.message.includes('The given Camera Device is already in use!')) {
      console.warn('摄像设备被其他应用占用');
    }
  };

  return (
    <View style={styles.cameraWrapper}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={device}
        isActive={isFocused && appState.current === 'active'}
        photo={true}
        onError={e => handleError(e)}
      />
      <Pressable
        style={styles.takePhotoBtn}
        onPress={() => handleTakePhoto()}
      />
      <Pressable style={styles.photosBtn} onPress={() => handlePhotos()}>
        <Photos size={28} color="rgba(255, 255, 255, 0.5)" />
      </Pressable>
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
    bottom: 30,
    width: 65,
    height: 65,
    borderRadius: 75,
    borderWidth: 6,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  photosBtn: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 40,
    padding: 5,
    marginRight: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
});
