import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Image , Button,Slider } from 'react-native';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Audio } from 'expo-av';

const Reproductor =()=>{
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
  
    async function playSound() {
      if (!sound) {
        console.log("Loading Sound");
        const { sound } = await Audio.Sound.createAsync(
          require("../music/Thriller.mp3")
        );
        setSound(sound);
        console.log("Playing Sound");
        await sound.playAsync();
        setIsPlaying(true);
      } else {
        if (isPlaying) {
          await sound.pauseAsync();
          setIsPlaying(false);
        } else {
          await sound.playAsync();
          setIsPlaying(true);
        }
      }
    }
  
    function restartSound() {
      if (sound) {
        sound.stopAsync(); // Detener la reproducción actual
        sound.setPositionAsync(0); // Volver al principio
        sound.playAsync(); // Reproducir desde el principio
        setIsPlaying(true); // Actualizar el estado a "reproduciendo"
      }
    }
  
    useEffect(() => {
      return sound
        ? () => {
            console.log("Unloading Sound");
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);
  
    return (
      <>
        <View style={styles.container}>
            <View style={styles.album}>
              <View style={styles.album_caratula}>
                <Image source={{ uri: "https://images.coveralia.com/audio/m/Michael_Jackson-Thriller-Frontal.jpg" }} style={styles.album_caratula_img}/>
              </View>
            <View style={styles.album_desc}>
              <Text style={styles.album_desc_cancion}>Cancion</Text>
              <Text style={styles.album_desc_artista}>Artista</Text>
            </View>
          </View>
          <View style={styles.container_reproductor}>
            <View style={styles.controladores}>
              <Icon name="repeat" size={20} color="white"  onPress={restartSound} style={styles.controladores_botones}/>
              <Icon name="backward" size={30} color="white"  onPress={restartSound} style={styles.controladores_botones}/>
              <Icon name={isPlaying ? "pause-circle" : "play-circle"} size={55} color={isPlaying ? "#91bbfd" : "white"} onPress={playSound} style={styles.controladores_botones}/>
              <Icon name="forward" size={30} color="white"  onPress={restartSound} style={styles.controladores_botones}/>
              <Icon name="stop" size={20} color="white"  onPress={restartSound} style={styles.controladores_botones}/>
            </View>
          </View>
        </View>
        
      </>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#24293d',
    },
    album:{
      width:'100%',
      height:'70%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    album_caratula:{
      width:'100%',
      height:'75%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    album_caratula_img:{
      width:350,
      height:350,
      borderRadius:20,
      overflow: 'hidden',
      elevation: 5,
      shadowColor: '#8ebbff', 
      shadowOffset: { width: 5, height: 5},
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    album_desc_cancion:{
      fontSize:25,
      color:'#f4f4fc',
      paddingLeft:15, 
      marginBottom:1,
      textAlign: "center", 
      textAlignVertical: "center", 
      fontWeight:'bold'
    },
    album_desc_artista:{
      fontSize:15,
      color:'#f4f4fc',
      paddingLeft:15, 
      marginBottom:1,  
      textAlign: "center", // Centra el texto horizontalmente
      textAlignVertical: "center", // Centra el texto verticalmente (solo Android)
    },
    container_reproductor:{
      width:'100%',
  
    },
    controladores:{
      padding:10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    controladores_botones:{
      paddingLeft:20,
      paddingRight:20,
    }
  
  });
  

export default Reproductor