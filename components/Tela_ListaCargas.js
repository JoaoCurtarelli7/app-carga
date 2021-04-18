import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from './firebase';
import Tela_Cargas from './Tela_Cargas';
import Icon from 'react-native-vector-icons/Feather';
import { Header, Input, Item } from 'native-base';

export default function Tela_ListaCargas() {
  const navegar = useNavigation();

  const [cargas, setCargas] = useState([]);
  const [listaCargasFiltradas, setListaCargasFiltradas] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadCargas() {
      await firebase
        .database()
        .ref('Cargas')
        .on('value', (snapshot) => {
          setCargas([]);

          snapshot.forEach((carga) => {
            let data = {
              key: carga.key,
              carga: carga.val().carga,
              tipo: carga.val().tipo,
              preco: carga.val().preco,
              local: carga.val().local,
              telefone: carga.val().telefone,
            };

            setCargas((oldArray) => [...oldArray, data]);
          });
        });
    }

    loadCargas();
  }, []);

  useEffect(() => {
    setListaCargasFiltradas(
      cargas.filter((item) => {
        return item.carga.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, cargas]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Header searchBar transparent>
          <Item
            style={{
              backgroundColor: '#FFF',
              marginLeft: 5,
              marginRight: 10,
              borderRadius: 15,
            }}>
            <Icon name="search" size={20} />
            <Input
              placeholder="Pesquisar "
              onChangeText={(text) => setSearch(text)}
              value={search}
            />
          </Item>
        </Header>

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => navegar.navigate('Cadastrar Carga')}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FFF' }}>
            Cadastrar uma Carga
          </Text>
        </TouchableOpacity>

        <View>
          {listaCargasFiltradas.map((data) => (
            <Tela_Cargas key={data.key} data={data} />
          ))}
        </View>
      </View>
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
  btnSubmit: {
    borderRadius: 7,
    marginTop: 20,
    height: 50,
    width: 200,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60,
    padding: 10,
    marginBottom: 20,
  },
});
