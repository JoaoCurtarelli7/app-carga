import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-';

import Tela_Inicial from './components/Tela_Inicial';
import Tela_CadastrarCarga from './components/Tela_CadastrarCarga';
import Tela_ListaCargas from './components/Tela_ListaCargas';
import Tela_nome from './components/Tela_nome';
import Tela_Calcular from './components/Tela_Calcular';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import { createDrawerNavigator } from '@react-navigation/drawer';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tela_Inicial"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="Tela_Inicial" component={Tela_Inicial} />
        <Stack.Screen
          name="Tela_CadastrarCarga"
          component={Tela_CadastrarCarga}
        />
        <Stack.Screen name="Tela_ListaCargas" component={Tela_ListaCargas} />
        <Stack.Screen name="Tela_nome" component={Tela_nome} />
        <Stack.Screen name="Tela_Calcular" component={Tela_Calcular} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
