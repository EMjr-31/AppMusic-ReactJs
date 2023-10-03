
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const CaratulaAlbum= () =>{
   return (
    <View style={styles.scroll_contenerdorAlbum}>
      <View style={styles.contenerdorAlbum_detalles}>
        <View style={styles.contenerdorAlbum_detalles_textos}>
          <Text style={styles.contenerdorAlbum_detalles_Album}>Nombre Album</Text>
          <Text style={styles.contenerdorAlbum_detalles_artista}>Artista</Text>
        </View>
        <View style={styles.contenerdorAlbum_detalles_icon}>
          <Icon name="play-circle" size={30} color="white" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    scroll_contenerdorAlbum:{
        backgroundColor:'white',
        padding:8,
        margin:10,
        width:150,
        height:200,
        borderRadius:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
    },
    contenerdorAlbum_detalles:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        borderRadius:15,
        padding:0
    },
    contenerdorAlbum_detalles_textos:{
        width:'65%',
    },
    contenerdorAlbum_detalles_icon:{
        width:'35%',
        padding: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    contenerdorAlbum_detalles_Album:{
        width:'100%',
        fontSize:11,
        color:'white',
        marginBottom:1,
        marginTop:5,
        paddingLeft:5
    },contenerdorAlbum_detalles_artista:{
        width:'100%',
        fontSize:10,
        color:'#DDD',
        paddingLeft:5
    }
});



  
export default CaratulaAlbum;