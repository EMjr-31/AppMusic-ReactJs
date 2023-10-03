import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,  } from 'react-native';
import ListadoAlmunes from './assets/src/components/ListadoAlmunes';


export default function App() {
  return (
    <>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.Encabezado}>
          <Text style={styles.Titulo}>App Music</Text>
        </View>
        <ListadoAlmunes genero={"Pop"}/>
        <ListadoAlmunes genero={"Rock"}/>
        <ListadoAlmunes genero={"Rap"}/>
      </View> 
      </ScrollView>
    </>
  );
}

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
