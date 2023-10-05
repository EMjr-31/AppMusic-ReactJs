import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Image , TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 


const Cancion= ({nombreCancion, caratula, duracion}) =>{
   return (
    <>
         <View style={styles.contenedor_canciones}>
              <View style={styles.contenedor_canciones_img}>
                <Image source={{ uri: "https://images.coveralia.com/audio/m/Michael_Jackson-Thriller-Frontal.jpg" }} style={styles.contenedor_canciones_img_img}  resizeMode="cover" />
              </View>
              <View style={styles.contenedor_canciones_nombre}>
                <Text style={styles.contenedor_canciones_nombre_texto}>{nombreCancion}</Text>
                <Text style={styles.contenedor_canciones_duracion}>{duracion}</Text>
              </View>
              <View  style={styles.contenerdorAlbum_detalles_icon}>
                <Icon name="play-circle" size={35} color="white" />
              </View>
            </View>
    </>
  );
};
const styles = StyleSheet.create({
    contenedor_canciones:{
        width:'100%',
        padding:15,
        flexDirection: 'row',
        justifyContent: 'left',
        alignSelf: 'flex-end',
      },
      contenedor_canciones_img:{
        width:50,
        height:50,
        borderRadius:10,
        overflow:'hidden',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
      },
      contenedor_canciones_img_img:{
        width:'100%',
        height:'100%'
      },
      contenedor_canciones_nombre:{
        width:270,
        height:60,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
      },
      contenedor_canciones_nombre_texto:{
        fontSize:15,
        color:'#f4f4fc',
        paddingLeft:10,
        marginBottom:3
      },
      contenedor_canciones_duracion:{
        color:'#c2c2c9',
        fontSize:10,
        paddingLeft:10,
      },
      contenerdorAlbum_detalles_icon:{
        height:60,
        width:60,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 5,
      }
    
        
});



  
export default Cancion;