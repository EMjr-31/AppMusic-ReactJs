import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import ListadoAlmunes from './ListadoAlmunes';
import albumes from '../data/albumes.json';

const PantallaInicial = () => {
  const generos=Object.keys(albumes.generos);

  return (
    <>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.Encabezado}>
          <Text style={styles.Titulo}>App Music</Text>
        </View>
        {generos.map((genero)=>(
          <ListadoAlmunes genero={genero}/>
        ))
        }
      </View> 
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24293d',
  },
  Encabezado:{
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
  }, 
  Titulo:{
    color:'white',
    fontSize:20,
  }
});

export default PantallaInicial;
