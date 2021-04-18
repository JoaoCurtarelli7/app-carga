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
import { Button, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default class Tela_Home extends React.Component {
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
          onPress={() => this.props.navigation.navigate('Lista de Cargas')}>
          <Text style={styles.txt}>Ver cargas  </Text>{' '}
          <Icon name="truck" color="white" size={24} left={20} />
        </Button>
        <Button
          style={styles.botao2}
          onPress={() => this.props.navigation.navigate('Cadastrar Carga')}>
          <Text style={styles.txt}>Cadastrar carga  </Text>{' '}
          <Icon name="truck" color="white" size={24} left={20} />
        </Button>
        <Button
          style={styles.botao3}
          onPress={() => this.props.navigation.navigate('Calcular Frete')}>
          <Text style={styles.txt}>Calcular frete  </Text>{' '}
          <Icon name="calculator" color="white" size={24} left={20} />
        </Button>
        <Button
          style={styles.botao4}
          onPress={() => this.props.navigation.navigate('Cards')}>
          <Text style={styles.txt}>Cards sobre o App  </Text>
          <Icon name="info" color="white" size={24} />
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
  txt: {
    color: 'white',
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
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginBottom: 30,
    marginLeft: 9,
    width: '90%',
    borderRadius: 15,
  },
  botao2: {
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginBottom: 30,
    marginLeft: 9,
    width: '90%',
    borderRadius: 15,
  },
  botao3: {
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginBottom: 30,
    marginLeft: 9,
    borderRadius: 15,
    width: '90%',
  },
  botao4: {
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 9,
    borderRadius: 15,
    width: '90%',
  },
});
