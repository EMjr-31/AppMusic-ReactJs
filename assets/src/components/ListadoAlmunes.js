import { Text, View, StyleSheet,ScrollView , TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import CaratulaAlbum from './CaratulaAlbum';
import albumes from '../data/albumes.json'

const ListadoAlmunes= ( {genero, navigation}) =>{
   return (
    <View style={styles.ListaGeneros}>
          <View style={styles.ListaGeneros_titulo}>
            <Text style={styles.ListaGeneros_titulo_genero}>{genero.toUpperCase()}</Text>
          </View>
          <ScrollView horizontal style={styles.ListaGeneros_scroll}>
            {albumes.generos[genero].map((album)=>(
              <TouchableHighlight   onPress={() => navigation.navigate('Album')}>
                <CaratulaAlbum album={album.nombre} artista={album.artista} caratula={album.caratula}/>
              </TouchableHighlight>
              
            ))} 
          </ScrollView>
        </View>
  );
};
const styles = StyleSheet.create({
    ListaGeneros:{
        padding:15
      },
      ListaGeneros_titulo:{
        marginBottom:10,

      },
      ListaGeneros_titulo_genero:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
      },
      
});



  
export default ListadoAlmunes;