import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextInput, StyleSheet, Text, View, Alert, Button, ScrollView } from 'react-native';

export default function Form({ navigation, datos }) {
 
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    navigation.navigate("Finalizar", {
      produccion: data.produccion, 
      descarte: data.descarte,
      operario: datos.operario,
      lbolsa: datos.lbolsa,
      lesponja: datos.lesponja,
      producto: datos.producto,
      lote: datos.lote, 
    });
  }

return (
  <ScrollView style={styles.container}>

    <Text style={styles.label}>Cantidad Producida</Text>
      <Controller
          as={TextInput}
          control={control}
          name="produccion"
          onChange={args => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue=""
          style={styles.numberImput}
          placeholder="00"
          keyboardType="number-pad"
      />
      {errors.produccion && Alert.alert("Complete la Cantidad Producida")}
    
    <Text style={styles.label}>Descarte</Text>
    <Controller
        as={TextInput}
        control={control}
        name="descarte"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
        style={styles.textImput}
        placeholder="00"
        keyboardType="number-pad"
    />
    {errors.descarte && Alert.alert("Complete el Descarte")}

    <Button title="Cerrar Sesion" onPress={handleSubmit(onSubmit)} />
  </ScrollView>  
);

}

const styles = StyleSheet.create({
    label: {
      padding: 2,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginLeft: 0,
    },
    numberImput: {
        height: 40,
        width: 40,
        backgroundColor: '#f0f8ff',
        borderWidth: 1,
        margin: 5,
        padding: 5,
    },
    textImput: {
      height: 40,
      width: 80,
      backgroundColor: '#f0f8ff',
      borderWidth: 1,
      margin: 5,
      padding: 5,
  },
  });