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

import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

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
      <View style={styles.container}>

        <Text style={styles.introducao}> Calcule valor limpo do frete</Text>

        <TextInput
          style={styles.txtinput}
          theme={{ colors: { primary: 'teal' } }}
          label="Insira valor do KM"
          autoCorrect={false}
          placeholderTextColor="#FFF"
          keyboardType="numeric"
          onChangeText={(texto) => this.setState({ num1: texto })}
        />

        <TextInput
          style={styles.txtinput}
          theme={{ colors: { primary: 'teal' } }}
          label="Insira a quilometragem até o destino"
          autoCorrect={false}
          placeholderTextColor="#FFF"
          keyboardType="numeric"
          onChangeText={(texto) => this.setState({ num2: texto })}
        />

        <TextInput
          style={styles.txtinput}
          theme={{ colors: { primary: 'teal' } }}
          label="Quanto irá gastar com diesel"
          autoCorrect={false}
          placeholderTextColor="#FFF"
          onChangeText={(texto) => this.setState({ num3: texto })}
          keyboardType="numeric"
        />

        <Button style={styles.botao3} onPress={() => this.Calcular()}>
          <Text style={styles.txt}>Calcular</Text>
        </Button>

        <Button
          style={styles.botao2}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.txt}>Voltar</Text>
        </Button>

        <Text style={styles.result}>Valor limpo é : R$ {this.state.total}</Text>
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
  txt: {
    color: 'white',
  },
  txtinput: {
    fontSize: 16,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    color: 'red',
  },

  botao3: {
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginBottom: -38,
    marginLeft: 20,
    width: '40%',
    borderRadius: 15,
  },
  botao2: {
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginBottom: 45,
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
