import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
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
  paragraph: {
    margin: 24,
    marginTop: 100,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
