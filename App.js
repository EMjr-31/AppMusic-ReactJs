import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Image , Button,Slider } from 'react-native';
import { useState, useEffect } from 'react';
import Reproductor from "./assets/src/components/reproductor";


export default function App() {
 
  return (
    <>
      <Reproductor/>
    </>
  );
}
const styles = StyleSheet.create({
  
});
