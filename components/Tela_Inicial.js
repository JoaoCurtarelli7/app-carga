import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Alert,
  StatusBar,
  Text,
} from 'react-native';
import { Card, Title, Button, Paragraph, TextInput, Avatar } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';

import Icon from 'react-native-vector-icons/FontAwesome';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default class Tela_Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: null,
    };
  }

  salvar = () => {
    if (this.state.nome != null) {
      Alert.alert(
        'Bem vindo ' + this.state.nome,
        'Conheça nosso aplicativo !!'
      );
      this.props.navigation.navigate('Home', {
        nome: this.state.nome,
      });
    } else {
      alert('Por favor preencha todos os campos');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/fundo.jpg')}
          style={styles.logo}
          opacity={0.8}>
          <Text style={styles.introducao}> Seja Bem-vindo ao Sul Cargas</Text>
          <TextInput
            style={styles.txtinput}
            theme={{ colors: { primary: 'teal' } }}
            label="  Por favor insira seu nome"
            autoCorrect={false}
            placeholderTextColor="#FFF"
            mode="flat"
            onChangeText={(texto) => this.setState({ nome: texto })}
          />

          <Card style={styles.card}>
            <Card.Content>
              <Title>O que é o Sul Cargas</Title>
              <Paragraph>
                {' '}
                O sul cargas disponibiliza cargas que podem ser carreagadas no
                sul do Brasil, além disso informa o valor do Km e prenchendo
                dados descobre valor total da carga.
              </Paragraph>
            </Card.Content>
          </Card>

          <Button style={styles.botao3} onPress={() => this.salvar()}>
            <Text style={styles.txt}>Seguir  </Text>{' '}
            <Icon name="angle-right" color="white" size={24} />
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  introducao: {
    color: 'white',
    fontSize: 22,
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: -20,
    marginTop: 20,
  },

  txtinput: {
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
  },

  botao3: {
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginBottom: 100,
    marginLeft: 105,
    width: '40%',
    borderRadius: 15,
    marginTop: 10,
  },
  card: {
    margin: 20,
  },
  txt: {
    color: 'white',
   
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});
