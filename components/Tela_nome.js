import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Alert,
  TextInput,
} from 'react-native';
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
  Accordion,
} from 'native-base';
import { Card, CardItem, Body } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';

const dataArray = [
  {
    title: 'O que é o Sul Cargas',
    content:
      ' O sul cargas disponibiliza cargas que podem ser carreagadas no sul do Brasil, além disso informa o valor do Km e prenchendo dados descobre valor total da carga',
  },
  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' },
];

export default class Tela_nome extends React.Component {
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
      this.props.navigation.navigate('Tela_Inicial', {
        nome: this.state.nome,
      });
    } else {
      alert('Por favor preencha todos os campos');
    }
  };
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            <Text style={styles.introducao}> Seja Bem-vindo ao Sul Cargas</Text>
            <TextInput
              style={styles.txtinput}
              placeholder="  Por favor insira seu nome"
              autoCorrect={false}
              placeholderTextColor="#FFF"
              onChangeText={(texto) => this.setState({ nome: texto })}
            />

            <Card>
              <CardItem header bordered>
                <Text>O que é o Sul Cargas</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                    {'  '} O sul cargas disponibiliza cargas que podem ser
                    carreagadas no sul do Brasil, além disso informa o valor do
                    Km e prenchendo dados descobre valor total da carga.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Button style={styles.botao3} onPress={() => this.salvar()}>
              <Text>Seguir</Text>
            </Button>
         
          </View>
        </Content>
      </Container>
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

  txtinput: {
    fontSize: 16,
    borderColor: '#FFF',
    borderWidth: 2,
    marginBottom: 50,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 40,
    padding: 8,
    color: 'white',
    width: '90%',
  },

  botao3: {
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 90,
    width: '40%',
    borderRadius: 15,
  },
});
