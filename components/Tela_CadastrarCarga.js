import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from './firebase';

export default function Tela_CadastrarCarga() {
  const navegar = useNavigation();

  const [carga, setCarga] = useState('');
  const [tipo, setTipo] = useState('');
  const [preco, setPreco] = useState('');
  const [local, setLocal] = useState('');
  const [telefone, setTelefone] = useState('');

  async function handleAdd() {
    if (
      carga !== '' &&
      tipo !== '' &&
      preco !== '' &&
      local !== '' &&
      telefone !== ''
    ) {
      let machine = await firebase.database().ref('Cargas');
      let chave = machine.push().key;

      machine.child(chave).set({
        carga: carga,
        tipo: tipo,
        preco: preco,
        local: local,
        telefone: telefone,
      });

      Keyboard.dismiss();
      setCarga('');
      setTipo('');
      setPreco('');
      setLocal('');
      setTelefone('');

      navegar.navigate('Tela_ListaCargas');
    } else {
      alert('Preencha todos os dados!!');
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.txt}>Cadastro da {'\n'} Carga</Text>
      <TextInput
        style={styles.txtinput}
        placeholder="  Digite o que a carga está carregada"
        autoCorrect={false}
        placeholderTextColor="#FFF"
        onChangeText={(val) => setCarga(val)}
        value={carga}
      />

      <TextInput
        style={styles.txtinput}
        placeholder="  Truck ou careta"
        autoCorrect={false}
        placeholderTextColor="#FFF"
        onChangeText={(val) => setTipo(val)}
        value={tipo}
      />

      <TextInput
        style={styles.txtinput}
        placeholder="  Preço por Km (Valor km rodado):"
        autoCorrect={false}
        placeholderTextColor="#FFF"
        onChangeText={(val) => setPreco(val)}
        value={preco}
      />

      <TextInput
        style={styles.txtinput}
        placeholder="  Local "
        autoCorrect={false}
        placeholderTextColor="#FFF"
        onChangeText={(val) => setLocal(val)}
        value={local}
      />
      <TextInput
        style={styles.txtinput}
        placeholder="  Telefone "
        autoCorrect={false}
        placeholderTextColor="#FFF"
        onChangeText={(val) => setTelefone(val)}
        value={telefone}
      />

      <TouchableOpacity style={styles.btnSubmit} onPress={handleAdd}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FFF' }}>
          Salvar Carga
        </Text>
      </TouchableOpacity>
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
  txt: {
    margin: 20,
    color: 'white',
    fontSize: 22,
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  txtinput: {
    fontSize: 16,
    borderColor: '#FFF',
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 40,
    padding: 8,
    color: 'white',
    width: '90%',
  },
  btnSubmit: {
    borderRadius: 7,
    marginTop: 20,
    height: 50,
    width: 150,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 85,
    padding: 5,
  },
});
