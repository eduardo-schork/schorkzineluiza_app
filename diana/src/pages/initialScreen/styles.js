import {
  StyleSheet,
} from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'space-around',
  },

  textPrincipal: {
    color: 'white',
    fontSize: metrics.screenHeight * 0.05,
    alignSelf: 'center',
  },

  iconLogo: {
    height: 100,
    width: 100,
    alignSelf: 'center'
  },
  
  textButtonCreateAccount: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    fontSize: metrics.screenHeight * 0.02,
  },

  textButtonLogin: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.primary,
    fontSize: metrics.screenHeight * 0.02,
  },

  buttonCreateAccount: {
    justifyContent: 'center',
    margin: 5,
    width: metrics.screenWidth * 0.8,
    height: metrics.screenHeight * 0.06,
    borderRadius: metrics.baseRadius * 10,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: colors.transparent,
    alignSelf: 'center'
  },

  buttonLogin: {
    justifyContent: 'center',
    margin: 5,
    width: metrics.screenWidth * 0.8,
    height: metrics.screenHeight * 0.06,
    borderRadius: metrics.baseRadius * 10,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: colors.white,
    alignSelf: 'center'
  }
});


export default styles;
