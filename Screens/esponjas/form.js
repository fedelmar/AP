import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextInput, StyleSheet, Text, View, Alert, Button, ScrollView } from 'react-native';
import Date from './date';

export default function Form({ navigation }) {

  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    navigation.navigate('Sesion',{
      lote: data.lote, 
      producto: data.producto,
      operario: data.operario,
      lbolsa: data.lbolsa,
      lesponja: data.lesponja,
    });
  }
  
return (
  <ScrollView>
    <View style={styles.container}>
      <Date />
      <Text style={styles.label}>Producto</Text>
      <Controller
          as={TextInput}
          control={control}
          name="producto"
          onChange={args => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue=""
          style={styles.textImput}
          placeholder="producto"
      />
      {errors.producto && Alert.alert("Complete el Producto")}

      <Text style={styles.label}>Lote</Text>
      <Controller
        as={TextInput}
        control={control}
        name="lote"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
        style={styles.numberImput}
        placeholder="00"
        keyboardType="number-pad"
      />
      {errors.lote && Alert.alert("Complete el Lote")}

      <Text style={styles.label}>Lote de Espoja</Text>
      <Controller
          as={TextInput}
          control={control}
          name="lesponja"
          onChange={args => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue=""
          style={styles.numberImput}
          placeholder="00"
          keyboardType="number-pad"
      />
      {errors.lesponja && Alert.alert("Complete el Lote de Esponja")}

      <Text style={styles.label}>Lote de Bolsa</Text>
      <Controller
          as={TextInput}
          control={control}
          name="lbolsa"
          onChange={args => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue=""
          style={styles.numberImput}
          placeholder="00"
          keyboardType="number-pad"
      />
      {errors.lbolsa && Alert.alert("Complete el Lote de Bolsa")}

      <Text style={styles.label}>Operario</Text>
      <Controller
          as={TextInput}
          control={control}
          name="operario"
          onChange={args => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue=""
          style={styles.textImput}
          placeholder="nombre"
      />
      {errors.operario && Alert.alert("¿Quíen sos?")}

      <Button title="Iniciar Sesion" onPress={handleSubmit(onSubmit)} />
    </View>
  </ScrollView>  
);

}

const styles = StyleSheet.create({
    label: {
      marginLeft: 1,
      padding: 2,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginLeft: 0,
      justifyContent: 'center',
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