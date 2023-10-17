import React, { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, StyleSheet, Image } from 'react-native';
import CheckBox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; 

const LoginScreen = () => {
  const navigation = useNavigation();

  // Estados para armazenar o nome de usuário, senha e a opção "Lembrar-me"
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Efeito que verifica se o usuário já está autenticado ao abrir a tela
  useEffect(() => {
    const checkRememberedUser = async () => {
      const rememberedUser = await AsyncStorage.getItem('rememberedUser');
      if (rememberedUser) {
        // Redefine a navegação para a tela "Home" se o usuário estiver autenticado
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
    };
    checkRememberedUser();
  }, [navigation]);

  // Manipulador de evento para o botão "Entrar"
  const handleLogin = async () => {
    if (username === 'usuario' && password === '123') {
      if (rememberMe) {
        // Armazena o nome de usuário se a opção "Lembrar-me" estiver marcada
        await AsyncStorage.setItem('rememberedUser', username);
      }
      // Redefine a navegação para a tela "Home" após o login bem-sucedido
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      // Exibe um alerta em caso de erro de autenticação
      alert('Erro de autenticação');
    }
  };

  return (
    <View style={styles.tela}>
      <Text style={styles.apres}>
        Bem-Vindo
      </Text>

      <View style={styles.inicio}>
        <Text style={styles.titulo}>Usuário</Text>
        <TextInput placeholder="Digite o nome do usuário: " onChangeText={setUsername} style={styles.inp} />
        
        <Text style={styles.titulo}>Senha</Text>
        <TextInput placeholder="Sua Senha: " onChangeText={setPassword} secureTextEntry style={styles.inp} />
        
        <CheckBox value={rememberMe} onValueChange={setRememberMe} style={styles.xeque} />
        <Text style={styles.lemb}>Lembrar-me</Text>

        <View style={styles.imagem}>
        <Image
            source={require('../../assets/Bem_vindo__4_-removebg-preview.png')}
        />
        </View>
      </View>

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  tela:{
    flex: 1,
    backgroundColor: '#000000'
  },
  
  inicio:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  inp:{
    width: '100%',
    height: 40,
    backgroundColor: '#DFE3D4',
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 12
  },

  apres:{
    marginLeft: 22,
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '30%',
    marginBottom: '15%',
    color: '#FFFFFF'
  },

  titulo:{
    fontSize: 24,
    marginTop: '8%',
    marginLeft: 5,
  },

  xeque:{
    marginLeft: '3%',
    marginTop: 40
  },  

  lemb:{
    fontSize: 16,
    marginLeft: '13%',
    bottom: 23
  },

  imagem:{
    display: 'flex',
    alignItems: 'center',
    bottom: '5%',
  }
});