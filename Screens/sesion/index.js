import React from 'react';  
import Form from './form';
import { Text, View, StyleSheet} from 'react-native';
import Date from './date';



export default function Sesion({ route, navigation }) {

  const { lote } = route.params;
  const { producto } = route.params;
  const { operario } = route.params;
  const { lesponja } = route.params;
  const { lbolsa } = route.params;
  
  const datos = {
    lote,
    producto,
    operario,
    lesponja,
    lbolsa,
  };

  return (
      <View style={styles.container}>
        <Date/>
        <Text style={styles.label}>Operario: {datos.operario}</Text>
        <Text style={styles.label}>Lote: {datos.lote}</Text>
        <Text tyle={styles.label}>Producto: {datos.producto}</Text>
        <Form navigation={navigation} datos={datos}/>
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
    marginLeft: 0,
    padding: 10,
  },
});