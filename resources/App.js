import { Text, SafeAreaView, StyleSheet, Image, StatusBar } from 'react-native';
import { Card } from 'react-native-paper';
import Login from './resources/inicio'

export default function Background(){
  return <>
    <Card>
    <Image style={styles.logo} source={require('/assets/logoGLPI.png')} />
    </Card>
    <Login/>
  </>
}

const styles = StyleSheet.create({
logo: {
  marginLeft: 40,
  height: 138,
  width: 250,
  },
})
