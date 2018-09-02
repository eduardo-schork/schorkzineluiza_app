import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import styles from './styles';

class Login extends Component {

  state = {
    login: '',
    senha: '',
  }

  _handleEsqueceuSenha = () => {

  }

  _handleLogar = () => {
    this.props.navigation.navigate('MainTab')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.iconLogo}
          source={require('img/shopping-green.png')} />
        <View style={styles.containerTextInput}>
          <Text style={styles.textTopTextInput}>Usuário</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(login) => this.setState({ login })}
            autoCapitalize="none"
            underlineColorAndroid='rgba(255,255,255,0.0)'
          />
        </View>

        <View style={styles.containerTextInput}>
          <Text style={styles.textTopTextInput}>Senha</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(senha) => this.setState({ senha })}
            autoCapitalize="none"
            underlineColorAndroid='rgba(255,255,255,0.0)'
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => this._handleLogar()}>
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>

          <Text
            onPress={() => this._handleEsqueceuSenha()}
            style={styles.textEsqueceuSenha}>Esqueci minha senha</Text>
        </View>
      </View>
    );
  }
}

export default Login