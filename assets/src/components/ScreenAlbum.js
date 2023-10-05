import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import canciones from '../data/canciones.json';
import Cancion from './cancion';


const PantallaAlbum= ({ navigation }) => {
  return (
    <>
    <ScrollView>
    <View style={styles.container}>
     <View  style={styles.descAlbum_contenedor}>
        <ImageBackground source={{ uri: "https://images.coveralia.com/audio/m/Michael_Jackson-Thriller-Frontal.jpg" }} blurRadius={10}  resizeMode="cover" >
            <View styles={styles.img_Album}>
              <View style={styles.descAlbum_contenedor_img}>
                <Image source={{ uri: "https://images.coveralia.com/audio/m/Michael_Jackson-Thriller-Frontal.jpg" }} style={styles.descAlbum_contenedor_img_img}/>
              </View>
              <View style={styles.descAlbum_contenedor_detalles}>
                <Text  style={styles.detalles_nombreArtista}>Michael Jackson</Text>
                <Text style={styles.detalles_nombreAlbum}>Thriller</Text>
              </View>
            </View>
        </ImageBackground>

        <View style={styles.listadoCanciones}>
        {canciones.canciones.map((cancion)=>(
          <TouchableHighlight   onPress={() => navigation.navigate('Cancion')}>

            <Cancion nombreCancion={cancion.nombre} duracion={cancion.duracion} />
          </TouchableHighlight>
             
          ))} 
        </View>
     </View>
     <View>
      
      </View>
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
  img_Album:{
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  descAlbum_contenedor_img:{
    backgroundColor:'white',
        margin:10,
        width:200,
        height:300,
        borderRadius:20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#8ebbff', 
        shadowOffset: { width: 5, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
  },
  descAlbum_contenedor_img_img:{
    width:'100%',
    height:'100%',
  },
  descAlbum_contenedor_detalles:{
    width:'100%',
    padding:5,
    backgroundColor: 'rgba(36, 41, 61, 0.5)',
  },
  detalles_nombreAlbum:{
        fontSize:20,
        color:'#f4f4fc',
        marginBottom:2,
        paddingLeft:15,
        fontWeight:'bold'
  },detalles_nombreArtista:{
    fontSize:12,
    color:'#f4f4fc',
    paddingLeft:15, 
    marginBottom:1
  },
  listadoCanciones:{  
    flex:1,
    width:'100%',
    height:'auto'
  },
  listadoCanciones_titulo:{
    padding:10,
    fontSize:13,
    color:'#91bbfd',
    marginBottom:2,
    paddingLeft:15,
  },

  
});

export default PantallaAlbum;
