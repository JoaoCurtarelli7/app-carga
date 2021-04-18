import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from './firebase';
import { TextInput, Avatar, Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function Tela_CadastrarCarga() {
  const navegar = useNavigation();

  const [carga, setCarga] = useState('');
  const [tipo, setTipo] = useState('');
  const [preco, setPreco] = useState('');
  const [local, setLocal] = useState('');
  const [telefone, setTelefone] = useState('');
  const [destino, setDestino] = useState('');

  async function handleAdd() {
    if (
      carga !== '' &&
      tipo !== '' &&
      preco !== '' &&
      local !== '' &&
      telefone !== '' &&
      destino !== ''
    ) {
      let machine = await firebase.database().ref('Cargas');
      let chave = machine.push().key;

      machine.child(chave).set({
        carga: carga,
        tipo: tipo,
        preco: preco,
        local: local,
        telefone: telefone,
        destino: destino,
      });

      Keyboard.dismiss();
      setCarga('');
      setTipo('');
      setPreco('');
      setLocal('');
      setTelefone('');
      setDestino('');

      navegar.navigate('Lista de Cargas');
    } else {
      alert('Preencha todos os dados!!');
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.txt2}>Cadastro da {'\n'} Carga</Text>

      <TextInput
        style={styles.txtinput}
        theme={{ colors: { primary: 'teal' } }}
        label="  Digite o que a carga está carregada"
        autoCorrect={false}
        placeholderTextColor="#FFF"
        onChangeText={(val) => setCarga(val)}
        value={carga}
      />

      <TextInput
        style={styles.txtinput}
        theme={{ colors: { primary: 'teal' } }}
        label="  Truck ou Carreta"
        autoCorrect={false}
        placeholderTextColor="#FFF"
        onChangeText={(val) => setTipo(val)}
        value={tipo}
      />

      <TextInput
        style={styles.txtinput}
        theme={{ colors: { primary: 'teal' } }}
        label="  Preço por Km (Valor km rodado):"
        autoCorrect={false}
        placeholderTextColor="#FFF"
        keyboardType="numeric"
        onChangeText={(val) => setPreco(val)}
        value={preco}
      />

      <TextInput
        style={styles.txtinput}
        theme={{ colors: { primary: 'teal' } }}
        label="  Local Origem "
        autoCorrect={false}
        placeholderTextColor="#FFF"
        onChangeText={(val) => setLocal(val)}
        value={local}
      />

      <TextInput
        style={styles.txtinput}
        theme={{ colors: { primary: 'teal' } }}
        label="  Local Destino "
        autoCorrect={false}
        placeholderTextColor="#FFF"
        onChangeText={(val) => setDestino(val)}
        value={destino}
      />

      <TextInput
        style={styles.txtinput}
        theme={{ colors: { primary: 'teal' } }}
        label="  Telefone/E-mail "
        autoCorrect={false}
        placeholderTextColor="#FFF"
        onChangeText={(val) => setTelefone(val)}
        value={telefone}
      />

      <Button style={styles.btnSubmit} onPress={handleAdd}>
        <Text style={styles.txt}>Salvar Carga </Text>
        <Icon name="save" color="white" size={24} />
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#1C1C1C',
    height: 500,
    width: 375,
    flex: 1,
  },
  txt2: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  txt: {
    color: 'white',
    textAlign: 'center',
  },
  txtinput: {
    fontSize: 16,
    borderColor: '#FFF',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    padding: 3,
    color: 'white',
    width: '90%',
  },
  btnSubmit: {
    borderRadius: 7,
    marginTop: 20,
    height: 50,
    width: 200,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 55,
    padding: 5,
    marginBottom: 50,
  },
});
