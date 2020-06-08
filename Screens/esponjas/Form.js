import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextInput, StyleSheet, Text, View, Alert, Button } from 'react-native';

export default function Form({ navigation }) {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    Alert.alert(
    "Datos",
    JSON.stringify(data),
    );
    navigation.navigate("Home");
  }

return (
  <View style={styles.container}>

    <Text style={styles.label}>Producto</Text>
    <Controller
        as={TextInput}
        control={control}
        name="producto"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
        style={styles.textImput}
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
    />
    {errors.operario && Alert.alert("¿Quíen sos?")}

    <Button title="Submit" onPress={handleSubmit(onSubmit)} />
  </View>  
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
      alignItems: 'center',
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