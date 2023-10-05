import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PantallaSecundaria = () => {
  return (
    <View style={styles.contenedor}>
      <Text>Esta es la pantalla secundaria</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PantallaSecundaria;
