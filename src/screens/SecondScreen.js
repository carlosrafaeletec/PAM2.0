import React from 'react';
import { Button, View, StyleSheet, Image, Text, ScrollView } from 'react-native';
/* import AsyncStorage from '@react-native-async-storage/async-storage';
 */


const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.tela}>
    <ScrollView>
      <View>
        <Image style={styles.mortais}
            source={require('../../assets/mortais.png')}
           
        /> 
        <Text style={styles.texto}>Jogos Mortais X</Text>
        <Text style={styles.divisao}>-----------------------------------------------------------------------</Text>
      </View>

      <View>
      <Image style={styles.exorcista}
            source={require('../../assets/exorcista.png')}
           
        /> 
        <Text style={styles.texto}>O Exorcista - O Devoto</Text>
        <Text style={styles.divisao}>-----------------------------------------------------------------------</Text>
      </View>

      <View>
        <Text style={styles.texto}>A Freira 2</Text>
        <Text style={styles.divisao}>-----------------------------------------------------------------------</Text>
      </View>

      <View>
        <Text style={styles.texto}>Fale Comigo</Text>
        <Text style={styles.divisao}>-----------------------------------------------------------------------</Text>
      </View>
    </ScrollView>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
  </View>
  );
};
export default SecondScreen;

const styles = StyleSheet.create({
  tela:{
    flex: 1,
    backgroundColor: '#666666'
  },

  texto:{
      fontSize: 30,
      color: '#FFF',
      textAlign: 'center',
      marginTop: '5%'
  },

  divisao:{
    color: '#248eff',
    textAlign: 'center',
    marginTop: '5%'
},

  mortais:{
      height: 405,
      marginLeft: '17%',
      marginTop: '8%',
      alignItems: 'center',
  },
  
  exorcista:{
    height: '55%',
    width: '65%',
    marginLeft: '17%',
    marginTop: '8%',
    alignItems: 'center'
  },

  freira:{
    
  },

  fale:{
    
  }

});