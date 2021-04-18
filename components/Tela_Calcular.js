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
      num1: null,
      num2: null,
      num3: null,
      total: null,
    };
  }

  Calcular = () => {
    var calc =
      parseInt(this.state.num1) * parseInt(this.state.num2) -
      parseInt(this.state.num3);
    this.setState({ total: calc });
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            <Text style={styles.introducao}> Calcule valor limpo do frete</Text>
            <TextInput
              style={styles.txtinput}
              placeholder="Insira valor do KM"
              autoCorrect={false}
              placeholderTextColor="#FFF"
              keyboardType="numeric"
              onChangeText={(texto) => this.setState({ num1: texto })}
            />
            <TextInput
              style={styles.txtinput}
              placeholder="Insira a quilometragem até o destino"
              autoCorrect={false}
              placeholderTextColor="#FFF"
              keyboardType="numeric"
              onChangeText={(texto) => this.setState({ num2: texto })}
            />

            <TextInput
              style={styles.txtinput}
              placeholder="Quanto irá gastar com diesel"
              autoCorrect={false}
              placeholderTextColor="#FFF"
              onChangeText={(texto) => this.setState({ num3: texto })}
              keyboardType="numeric"
            />

            <Button style={styles.botao3} onPress={() => this.Calcular()}>
              <Text>Calcular</Text>
            </Button>
            <Button
              style={styles.botao2}
              onPress={() => this.props.navigation.navigate('Tela_Inicial')}>
              <Text>Voltar</Text>
            </Button>

            <Text style={styles.result}>
              Valor limpo é : R$ {this.state.total}
            </Text>
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
    marginBottom: 40,
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
    marginBottom: -45,
    marginLeft: 20,
    width: '40%',
    borderRadius: 15,
  },
  botao2: {
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    marginBottom: 30,
    marginLeft: 160,
    width: '40%',
    borderRadius: 15,
  },
  result: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
