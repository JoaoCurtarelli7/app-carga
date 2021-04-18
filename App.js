import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';

import Tela_Home from './components/Tela_Home';
import Tela_CadastrarCarga from './components/Tela_CadastrarCarga';
import Tela_ListaCargas from './components/Tela_ListaCargas';
import Tela_Inicio from './components/Tela_Inicio';
import Tela_Calcular from './components/Tela_Calcular';
import CustomDrawer from './components/CustomDrawer';
import Tela_Card from './components/Tela_Card';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Sul Cargas"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="Home" component={Tela_Home} />
      <Stack.Screen name="Cadastrar Carga" component={Tela_CadastrarCarga} />
      <Stack.Screen name="Lista de Cargas" component={Tela_ListaCargas} />
      <Stack.Screen name="Sul Cargas" component={Tela_Inicio} />
      <Stack.Screen name="Calcular Frete" component={Tela_Calcular} />
      <Stack.Screen name="Cards" component={Tela_Card} />
    </Stack.Navigator>
  );
}

export default function DrawerServidor() {
  const AppDrawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <AppDrawer.Navigator
        initialRouteName="Sul Cargas"
        screenOptions={{
          headerShown: true,
        }}
        drawerContent={CustomDrawer}>
        <AppDrawer.Screen name="Home" component={Tela_Home} />
        <AppDrawer.Screen
          name="Cadastrar Carga"
          component={Tela_CadastrarCarga}
        />
        <AppDrawer.Screen name="Lista de Cargas" component={Tela_ListaCargas} />
        <AppDrawer.Screen name="Calcular Frete" component={Tela_Calcular} />
        <AppDrawer.Screen name="Sul Cargas" component={Tela_Inicio} />
        <AppDrawer.Screen name="Cards" component={Tela_Card} />
      </AppDrawer.Navigator>
    </NavigationContainer>
  );
}
