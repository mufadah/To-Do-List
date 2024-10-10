import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';

const Dashboard = () => {
  const [color, setColor] = useState('black');
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [important, setImportant] = useState('');
  const [time, setTime] = useState('');
  const [toDoList, setToDoList] = useState([
    {
      id: '123',
      desc: 'Bangun Pagi',
      penting: 'Hard',
      time: '07.30',
    },
    {
      id: '135',
      desc: 'Sarapan',
      penting: 'Medium',
      time: '08.00',
    },
  ]);

  const handleImportantChange = value => {
    setImportant(value.toLowerCase());

    if (value.toLowerCase() === 'low') {
      setColor('green');
    } else if (value.toLowerCase() === 'medium') {
      setColor('yellow');
    } else if (value.toLowerCase() === 'hard') {
      setColor('red');
    } else {
      setColor('black'); // Default color
    }
  };

  const addToDoList = () => {
    if (input === '' || time === '') {
      Alert.alert('Semua kolom harus diisi');
    } else {
      let randomNumber = Math.random().toString();
      let newData = [
        ...toDoList,
        {
          id: randomNumber,
          desc: input,
          penting: important,
          time: time,
        },
      ];
      setToDoList(newData);
      setInput('');
      setImportant('');
      setTime('');
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={[styles.list, {borderColor: 'red'}]}>
        <View
          style={{marginLeft: 5, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'black', flex: 1, justifyContent: 'center'}}>
            {item.desc}
          </Text>
          <TouchableOpacity
            style={styles.pencetan1}
            onPress={() => deleteToDoList(item.id)}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>-</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: 'gray', marginLeft: 5}}>{item.time}</Text>
      </View>
    );
  };

  const deleteToDoList = id => {
    let newData = toDoList.filter(value => value.id !== id);
    setToDoList(newData);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#dace88'} />
      <View style={styles.header}>
        <Text style={styles.font}>TO DO LIST</Text>
      </View>

      <FlatList
        data={toDoList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{padding: 10}}
      />

      <View style={styles.input}>
        <TouchableOpacity
          style={styles.pencetan}
          onPress={() => setModalVisible(true)}>
          <Text style={{fontSize: 35}}>+</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              value={time}
              onChangeText={text => setTime(text)}
              placeholder="Masukan Waktu"
              style={[styles.inputan, {marginTop: 10}]}
              placeholderTextColor={'black'}
              keyboardType="numeric"
            />

            <TextInput
              value={input}
              onChangeText={text => setInput(text)}
              placeholder="Masukan Aktivitas"
              style={[styles.inputan, {marginTop: 10}]}
              placeholderTextColor={'black'}
            />

            <TouchableOpacity style={styles.inputLagi} onPress={addToDoList}>
              <Text style={styles.text1}>UBAH</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#dace88',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 10,
  },
  font: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    alignItems: 'flex-end',
    width: '100%',
  },
  pencetan: {
    marginBottom: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#e23559',
    borderRadius: 50,
    marginLeft: 5,
    elevation: 10,
  },
  pencetan1: {
    width: 25,
    height: 25,
    backgroundColor: '#bce6f3',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    elevation: 5,
  },
  list: {
    minHeight: 50,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    elevation: 5,
    padding: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    width: 30,
    height: 30,
    elevation: 2,
    marginRight: -190,
    marginTop: -50,
  },
  text1: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  inputLagi: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    width: 70,
    height: 50,
    elevation: 2,
    // marginRight:-190,
    marginTop: 20,
  },
  inputan: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'black',
  },
});

export default Dashboard;
