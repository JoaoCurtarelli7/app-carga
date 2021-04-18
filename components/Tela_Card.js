import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Alert,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';
import { Card, Button, Title, Paragraph } from 'react-native-paper';

import { TextInput } from 'react-native-paper';

export default class Tela_nome extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card
          onPress={() => this.props.navigation.navigate('Lista de Cargas')}
          style={styles.card}>
          <Card.Content>
            <Title>Como pegar uma carga</Title>
            <Paragraph>
              {' '}
              Para pegar uma carga você deve entrar em contato atraves do
              telefone ou email informado pelo responsavel. CLIQUE PARA IR
            </Paragraph>
          </Card.Content>
        </Card>
        <Card
          onPress={() => this.props.navigation.navigate('Calcular Frete')}
          style={styles.card}>
          <Card.Content>
            <Title>Calcular Frete</Title>
            <Paragraph>
              {' '}
              O calcular frete funciona para que os motoristas possam ver quanto
              vão ganhar de dinheiro limpo na viagem. {'\n'}
              CLIQUE PARA IR
            </Paragraph>
          </Card.Content>
        </Card>

        <Image style={styles.img} source={require('../assets/logo.jpg')} />
        <Button
          style={styles.botao2}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.txt}>Voltar</Text>
        </Button>
      </ScrollView>
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
  card: {
    margin: 20,
  },
  txt: {
    color: 'white',
  },
  img: {
    margin: 20,
    width: 288,
    height: 150,
    marginLeft: 20,
  },
  botao2: {
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginBottom: 50,
    marginLeft: 105,
    width: '40%',
    borderRadius: 15,
  },
});
