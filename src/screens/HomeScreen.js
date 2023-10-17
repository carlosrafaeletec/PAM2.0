import React from 'react';
import { Button, Text, View, StyleSheet, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation}) => {
    return (
      <View style={styles.tela}>
      <ScrollView>
        <Image style={styles.imagem}
            source={require('../../assets/filme1.png')}
        />
        <Text style={styles.film1}> Filmes em Cartaz </Text>
        <Image style={styles.cartaz}
            source={require('../../assets/cartaz.png')}
        />
        <Text style={styles.parcerias}> Parcerias </Text>
        <Image style={styles.parc}
            source={require('../../assets/parcerias.png')}
        />
        <Text style={styles.cupom}> Cupom </Text>
        <Image style={styles.cup}
            source={require('../../assets/cupom.png')}
        />
        </ScrollView>
        <Button title="Filmes" onPress={() => navigation.navigate('Segunda Tela')}/>
      </View>
      
    );
  };
  export default HomeScreen;

  const styles = StyleSheet.create({
    tela:{
      flex: 1,
      backgroundColor: '#666666'
    },
  
    entrada:{
      flex: 1,
      color: '#fff',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      paddingStart: '5%',
      paddingEnd: '5%',
    },
  
    titulo:{
      fontSize: 14,
      marginTop: '2%',
      marginBottom: '8%',
      color: '#FFF',
      textAlign: 'center'
    },

    imagem:{
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'center',
      height: 250,
      width: '50'
    },

    film1:{
      fontSize: 28,
      color: '#FFF',
      textAlign: 'center',
      marginTop: '8%',

    },

    cartaz:{
      height: 365,
      width: '20',
      marginLeft: '8%',
      marginTop: '-11%'
    },

    parcerias:{
      fontSize: 28,
      color: '#FFF',
      textAlign: 'center',
      marginTop: '-15%'
    },
  
    parc:{
      height: 290,
      width: '10',
      marginTop: '-10%',
    },

    cupom:{
      fontSize: 28,
      color: '#FFF',
      textAlign: 'center',
      marginTop: '-15%'
    },
  
    cup:{
      height: 290,
      width: '10',
      marginTop: '-19%',
      marginLeft: '2%'
    },
  });
  