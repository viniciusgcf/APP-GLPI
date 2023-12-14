import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';


import { Card } from 'react-native-paper';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Image style={styles.logo} source={require('/assets/logoGLPI.png')} />
          <Text style={styles.paragraph}>
            Insira seu login de acesso
          </Text>
      </Card>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
    logo: {
    marginTop: 70,
    height: 128,
    width: 300,
  },
  paragraph: {
    margin: 24,
    marginTop: 100,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


