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
        <Image style={styles.freira}
              source={require('../../assets/freiraCart.png')}
        /> 
        <Text style={styles.texto}>A Freira 2</Text>
        <Text style={styles.divisao}>-----------------------------------------------------------------------</Text>
      </View>

      <View>
        <Image style={styles.fale}
            source={require("../../assets/faleCart.png")}
        />
        <Text style={styles.texto}>Fale Comigo</Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </ScrollView>
      
  </View>
  );
};
export default SecondScreen;

const styles = StyleSheet.create({
  tela:{
    backgroundColor: '#666666'
  },

  texto:{
      fontSize: 30,
      color: '#FFF',
      textAlign: 'center',
      marginTop: '3%',
      marginRight: '1%',
  },

  divisao:{
    color: '#248eff',
    textAlign: 'center',
    marginTop: '3%'
},

  mortais:{
      height: 405,
      marginLeft: '17%',
      marginTop: '7%',
      borderColor: '#248eff',
      borderWidth: 3,
  },

  freira:{
    marginTop: '3%',
    marginLeft: '13%',
    width: 290,
    borderColor: '#248eff',
    borderWidth: 3,
  },

  fale:{
    marginTop: '3%',
    width: 285,
    marginLeft: '13%',
    borderColor: '#248eff',
    borderWidth: 3,
  }

});