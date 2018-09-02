import {
  StyleSheet,
} from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  iconLogo: {
    marginBottom: metrics.screenHeight * 0.12,
    height: 100,
    width: 100,
    alignSelf: 'center'
  },

  textTopTextInput: {
    fontSize: metrics.screenHeight * 0.02,
    color: colors.primary,
    alignSelf: 'flex-start',
  },

  containerTextInput: {
    marginBottom: 10,
    alignSelf: 'center',
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    width: metrics.screenWidth * 0.7,
    height: metrics.screenHeight * 0.09,
  },

  textInput: {
    height: metrics.screenHeight * 0.08,
    width: metrics.screenWidth * 0.7,
    backgroundColor: colors.whiteTransparent,
    alignSelf: 'center',
    fontSize: metrics.screenHeight * 0.025,
  },

  textButtonLogin: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.white,
    fontSize: metrics.screenHeight * 0.02,
  },

  buttonLogin: {
    justifyContent: 'center',
    margin: 5,
    width: metrics.screenWidth * 0.7,
    height: metrics.screenHeight * 0.06,
    borderRadius: metrics.baseRadius * 10,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: colors.primary,
    alignSelf: 'center'
  },

  textEsqueceuSenha: {
    alignSelf: 'center',
    fontSize: metrics.screenHeight * 0.02,
    color: colors.primary,
    padding: 5,
  }

});


export default styles;
