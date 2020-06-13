import React from 'react';  
import { Text, View, Button, StyleSheet } from 'react-native';

export default function Finalizar ({ route, navigation }) {

    const { lote } = route.params;
    const { producto } = route.params;
    const { operario } = route.params;
    const { lesponja } = route.params;
    const { lbolsa } = route.params;
    const { produccion } = route.params;
    const { descarte } = route.params;
    
    const datos = {
        lote,
        producto,
        operario,
        lesponja,
        lbolsa,
        produccion,
        descarte,
    }

    return (
        <View style={styles.container}>
            <Text style={styles.container}>Lote: {datos.lote}</Text>
            <Text style={styles.container}>Producto: {datos.producto}</Text>
            <Text style={styles.container}>Lote Bolsa: {datos.lbolsa}</Text>
            <Text style={styles.container}>Lote Esponja: {datos.lesponja}</Text>
            <Text style={styles.container}>Cantidad Producida: {datos.produccion}</Text>
            <Text style={styles.container}>Descartes: {datos.descarte}</Text>
            <Text style={styles.container}>Operario: {datos.operario}</Text>       
            <Button title="Confirmar" onPress={() => navigation.navigate("Home")}/>
        </View>
    )

}

const styles = StyleSheet.create({
    label: {
      padding: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginLeft: 0,
      justifyContent: 'center',
      padding: 10,
    },
  });

