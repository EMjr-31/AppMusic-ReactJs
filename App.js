import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Image , Button,Slider } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaInicial from "./assets/src/components/ScreenInicio";
import PantallaAlbum from "./assets/src/components/ScreenAlbum";
import Reproductor from "./assets/src/components/reproductor";

const Stack = createStackNavigator();
export default function App() {
 
  return (
    <>
       <NavigationContainer >
        <Stack.Navigator 
          screenOptions={{    
            headerStyle: {
              backgroundColor: '#25293c',
            },
            headerTintColor: '#f4f4fc', 
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen name="App Muisc" component={PantallaInicial} />
          <Stack.Screen name="Album" component={PantallaAlbum} />
          <Stack.Screen name="Cancion" component={Reproductor} />
        </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({

});
