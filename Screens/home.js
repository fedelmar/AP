import React from 'react';
import { StyleSheet, View, Button } from 'react-native';


function HomeScreen({ navigation }) {
    return (
      <>
        <View style={styles.container}>
            <Button  
                title="Planilla Esponjas" 
                onPress={() => navigation.navigate('Esponjas')}
                style={{ backgroundColor: 'black' }}
            />
        </View>
      </>
    );
  }
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
