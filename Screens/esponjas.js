import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';


function Esponjas() {
    return (
      <>
        <View style={styles.container}>
            <Text>Lote</Text>
            <TextInput style={styles.textImput}></TextInput>
            <Text>Producto</Text>
            <TextInput style={styles.textImput}></TextInput>
            <Text>Lote Bolsa</Text>
            <TextInput style={styles.textImput}></TextInput>
            <Text>Lote Esponja</Text>
            <TextInput style={styles.textImput}></TextInput>
        </View>
      </>
    );
  }
export default Esponjas;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textImput: {
        height: 40,
        width: 40,
        backgroundColor: '#f0f8ff',
        borderWidth: 1,
    },
  });
