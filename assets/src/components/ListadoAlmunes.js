import { Text, View, StyleSheet,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import CaratulaAlbum from './CaratulaAlbum';

const ListadoAlmunes= ( {genero}) =>{
  
   return (
    <View style={styles.ListaGeneros}>
          <View style={styles.ListaGeneros_titulo}>
            <Text style={styles.ListaGeneros_titulo_genero}>{genero}</Text>
          </View>
          <ScrollView horizontal style={styles.ListaGeneros_scroll}>
            <CaratulaAlbum/>
            <CaratulaAlbum/>
            <CaratulaAlbum/>
            <CaratulaAlbum/>
            <CaratulaAlbum/>
            <CaratulaAlbum/>
          </ScrollView>
        </View>
  );
};
const styles = StyleSheet.create({
    ListaGeneros:{
        padding:15
      },
      ListaGeneros_titulo:{
        marginBottom:15
      },
      ListaGeneros_titulo_genero:{
        color:'white',
        fontSize:18,
      },
      
});



  
export default ListadoAlmunes;