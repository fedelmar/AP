import React from 'react';  
import Form from './form';
import { Text, View, StyleSheet} from 'react-native';
import Date from './date';



export default function Sesion({ route, navigation }) {

  const { lote } = route.params;
  const { producto } = route.params;
  const { operario } = route.params;
  return (
    <View style={styles.container}>
      <Date/>
      <Text style={styles.label}>Operario: {JSON.stringify(operario)}</Text>
      <Text style={styles.label}>Lote: {JSON.stringify(lote)}</Text>
      <Text tyle={styles.label}>Producto: {JSON.stringify(producto)}</Text>
      <Form navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    padding: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});