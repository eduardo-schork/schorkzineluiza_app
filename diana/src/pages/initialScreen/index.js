import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import styles from './styles';

class InitialScreen extends Component {
  _handleCreateAccount = () => {
    console.warn('create account pressed')
  }

  _handleLogin = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.iconLogo}
            source={require('img/shopping.png')} />
          <Text style={styles.textPrincipal}>
            <Text>schorkzine</Text>
            <Text style={{ fontWeight: 'bold' }}>luiza</Text>
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonCreateAccount}
            onPress={() => this._handleCreateAccount()}>
            <Text style={styles.textButtonCreateAccount}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => this._handleLogin()}>
            <Text style={styles.textButtonLogin}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default InitialScreen