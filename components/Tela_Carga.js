import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function Carga({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.textosView}>
        <Text>
          <Text style={styles.textoNegrito}>Carga: </Text>
          {data.carga}
        </Text>
        <Text>
          <Text style={styles.textoNegrito}>Tipo: </Text>
          {data.tipo}
        </Text>
        <Text>
          <Text style={styles.textoNegrito}>Preço/Km: </Text>
          {data.preco}
        </Text>
        <Text>
          <Text style={styles.textoNegrito}>Localidade: </Text>
          {data.local}
        </Text>
        <Text>
          <Text style={styles.textoNegrito}>Telefone: </Text>
          {data.telefone}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    marginHorizontal: 15,
  },
  textosView: {
    flex: 1,
    marginLeft: 10,
  },
  textoNegrito: {
    fontWeight: 'bold',
  },
});
