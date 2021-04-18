import * as React from 'react';
import { Image, StyleSheet, View, ImageBackground, Alert } from 'react-native';
import {
  Container,
  Header,
  Button,
  Text,
  Content,
  Form,
  Item,
  Input,
  Label,
  Spinner,
  FooterTab,
  Footer,
  Icon,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';

import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Tela_Inicial extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.introducao}>Bem-vindo ao Sul Cargas</Text>

        <Text style={styles.txt2}>
          {' '}
          O Sul Cargas disponibiliza todas cargas do sul do Brasil, junto com o
          valor do KM e valor total{' '}
        </Text>

        <Button
          style={styles.botao1}
          onPress={() => this.props.navigation.navigate('Tela_ListaCargas')}>
          <Text>Ver cargas</Text>
        </Button>
        <Button
          style={styles.botao2}
          onPress={() => this.props.navigation.navigate('Tela_CadastrarCarga')}>
          <Text>Cadastrar carga</Text>
        </Button>
        <Button
          style={styles.botao3}
          onPress={() => this.props.navigation.navigate('Tela_Calcular')}>
          <Text>Calcular valor limpo do frete</Text>
        </Button>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#1C1C1C',
    height: 500,
    width: 375,
    flex: 1,
  },

  introducao: {
    margin: 20,
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },

  txt2: {
    fontSize: 16,
    marginTop: 10,
    justifyContent: 'center',
    fontWeight: 'common',
    textAlign: 'center',
    flex: 5,
    color: 'white',
  },

  botao1: {
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    marginBottom: 30,
    marginLeft: 9,
    width: '90%',
    borderRadius: 15,
  },
  botao2: {
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    marginBottom: 30,
    marginLeft: 9,
    width: '90%',
    borderRadius: 15,
  },
  botao3: {
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    marginBottom: 80,
    marginLeft: 9,
    borderRadius: 15,

    width: '90%',
  },

});
