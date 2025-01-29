import React, {useState} from 'react';
import {
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import base from '../../../styles/base';

export default function _Modal(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[base.container, styles.container]}>
      <Button title="打开弹窗" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={[base.container, styles.container]}>
          <View style={styles.modalView}>
            <View style={styles.modalViewHeader}>
              <Text style={styles.modalViewHeaderText}>提示</Text>
            </View>
            <View style={styles.modalViewBody}>
              <Text>你好啊，骚年~</Text>
            </View>
            <View style={styles.modalViewFooter}>
              <Pressable
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelBtnText}>取消</Text>
              </Pressable>
              <Pressable
                style={styles.confirmBtn}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.confirmBtnText}>确定</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    display: 'flex',
    width: '80%',
    maxWidth: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    elevation: 12,
  },
  modalViewHeader: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    padding: 16,
  },
  modalViewHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalViewBody: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    padding: 16,
  },
  modalViewFooter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  cancelBtn: {
    padding: 16,
  },
  cancelBtnText: {
    color: '#999',
    fontSize: 14,
  },
  confirmBtn: {
    padding: 16,
  },
  confirmBtnText: {
    color: '#007BFF',
    fontSize: 14,
  },
});
